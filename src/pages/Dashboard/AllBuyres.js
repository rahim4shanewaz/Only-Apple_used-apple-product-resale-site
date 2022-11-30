import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../components/modal/ConfirmationModal';
import useHooks from '../../components/useTitles';
import Loading from '../shared/loading/Loading';

const AllBuyres = () => {
    useHooks('Buyer')

    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const {data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            try{
                const res = await fetch('https://final-server-lovat.vercel.app/users/allbuyer', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){
                
            }
           
           
        }
    });


    
    const handleDeleteBuyer = buyer => {
        fetch(`https://final-server-lovat.vercel.app/buyer/${buyer._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${buyer.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }







    return (
        <div>
            <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='p-10 m-10 mt-20'>
            {
                buyers.map(buyer => <div
                    key={buyer._id}
                    >
                        <div className='flex gap-3 items-center shadow-xl  mt-2 bg-slate-50'>
                        <div className="avatar m-3">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={buyer.img}  alt="" />
                            </div>
                            </div>
                           
                        <h1 className='text-center text-3xl font-bold '>{buyer.name}</h1>
                        <h1 className='text-center font-bold text-slate-500'>{buyer.email}</h1>
                        <h1 className='text-center font-bold'>{buyer.role}</h1>
                       
                       
                        <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-sm rounded-none btn-error">Delete</label>
                        </div>

                </div>)
            }
            </div>
            {
                
                    deletingBuyer && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                        successAction = {handleDeleteBuyer}
                        successButtonName="Delete"
                        modalData = {deletingBuyer}
                        closeModal = {closeModal}
                    >
                    </ConfirmationModal>
                
            }
            
        </div>
    );
};

export default AllBuyres;