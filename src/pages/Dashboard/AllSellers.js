import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../components/modal/ConfirmationModal';
import Loading from '../shared/loading/Loading';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }

    const {data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{

            try{
                const res = await fetch('http://localhost:5000/users/allseller',{
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


    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${seller.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleVerify = id => {
        fetch(`http://localhost:5000/seller/verify/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller Verified')
                refetch();
            }
        })
    }









    return (
        <div>
        <h1>this is all seller  sections</h1>
        <div className='p-10 m-10'>
        {
            sellers.map(seller => <div
                key={seller._id}
                >
                    <div className='flex gap-5 items-center shadow mt-2 bg-slate-100'>
                    <div className="avatar m-3">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={seller.img}  alt="" />
                            </div>
                            </div>
                    <h1 className='text-center text-green-500'>{seller.name}</h1>
                    <h1 className='text-center text-red-500'>{seller.email}</h1>
                    <h1 className='text-center'>{seller.role}</h1>
                  
                       {seller?.verify ?
                         <button className="btn btn-outline btn-error">Verified</button>
                       :
                         <button onClick={() => handleVerify(seller._id) }className="btn btn-outline btn-error">Verify</button>
                       }

                        <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                    </div>

            </div>)
        }
        </div>
        {
             deletingSeller && <ConfirmationModal
             title={`Are you sure you want to delete?`}
             message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
             successAction = {handleDeleteSeller}
             successButtonName="Delete"
             modalData = {deletingSeller}
             closeModal = {closeModal}
         >
         </ConfirmationModal>
        }
        
    </div>
    );
};

export default AllSellers;