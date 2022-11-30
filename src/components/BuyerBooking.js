import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/ContextApi';
import Loading from '../pages/shared/loading/Loading';
import BuyerBookingProduct from './BuyerBookingProduct';
import useHooks from './useTitles';

const BuyerBooking = () => {
    useHooks('My Booking')

    //booking function.

    const { user, loading, dbUser } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://final-server-lovat.vercel.app/buyer/bookingByUser?id=${dbUser._id}`);
                const data = await res.json();
               
               
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = product => {
        fetch(`https://final-server-lovat.vercel.app/buyer/products/${dbUser._id}`, {
            method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
              
                toast.success(`buyer ${product.name} booking cancel successfully`)
            }
            refetch();
        })
    }


    if (isLoading) {
      
        return <Loading></Loading>
    }
    return (
        <div className='mt-20 m-20 p-10 '>

          {
            products.map(product => <BuyerBookingProduct handleDeleteProduct={handleDeleteProduct} key={product._id} product={product} ></BuyerBookingProduct> )
          }
            
        </div>
    );
};

export default BuyerBooking;