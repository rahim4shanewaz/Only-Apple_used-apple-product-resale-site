import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../components/modal/ConfirmationModal';
import Loading from '../shared/loading/Loading';
import verify from '../../assets/icons/icons8-approval.gif';


const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }

    const {data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{

            try{
                const res = await fetch('https://final-server-lovat.vercel.app/users/allseller');
                const data = await res.json();
            return data;

            }
            catch(error){
                
            }
            
            
        }
    });


    const handleDeleteSeller = seller => {
        fetch(`https://final-server-lovat.vercel.app/seller/${seller._id}`, {
            method: 'DELETE'
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${seller.name} deleted successfully`)
            }
        })
    }

   


    const handleVerify = id => {
        fetch(`https://final-server-lovat.vercel.app/seller/verify/${id}`, {
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
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
      
        <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='p-10 m-10 mt-20'>
        {
            sellers.map(seller => <div
                key={seller._id}
                >
                    <div className='flex gap-5 items-center shadow-xl mt-2 p-3 justify-start'>
                    <div className="avatar m-3">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={seller.img}  alt="" />
                            </div>
                            </div>
                    <h1 className='text-center text-2xl font-bold'>{seller.name}</h1>
                    <h1 className='text-center font-bold text-slate-500'>{seller.email}</h1>
                    <h1 className='text-center font-bold'>{seller.role}</h1>
                  
                       {seller?.verify ?
                         <div>
                            <img className='h-7 w-7' src={verify} alt="" />
                         </div>
                       :
                         <button onClick={() => handleVerify(seller._id) }className="text-slate-600 font-bold px-3 py-1 shadow bg-slate-200">Verify</button>
                       }

                        <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm rounded-none btn-error">Delete</label>
                    </div>

            </div>)
        }
        </div>
        {
             deletingSeller && <ConfirmationModal
             title={`Are you sure you want to delete?`}
             message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
             successAction = {handleDeleteSeller}
             successButtonName="Confirm Delete"
             modalData = {deletingSeller}
             closeModal = {closeModal}
         >
         </ConfirmationModal>
        }
        
    </div>
    );
};

export default AllSellers;