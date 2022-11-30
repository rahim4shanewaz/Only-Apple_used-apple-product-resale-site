import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseProducts from './AdvertiseProducts';

const AdvertiseSection = () => {
    

    const {data: products = [], isLoading, refetch} =useQuery({
        queryKey:['products'],
        queryFn: async() => {
            try{
                const res = await fetch('http://localhost:5000/advertise',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                   
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
           
        }
    })






    return (
        <div>
        <h1>this is Accessories products </h1>
        <div className='grid grid-cols-3'>
        {
            products.map(product => <AdvertiseProducts
                key={product._id}
                product={product}
               
               >

                </AdvertiseProducts>)
        }
      </div>
     
        
    </div>
    );
};

export default AdvertiseSection;