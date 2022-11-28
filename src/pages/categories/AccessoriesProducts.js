import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductAccessory from './ProductAccessory';

const AccessoriesProducts = () => {

    const {data: accessories = [], refetch} =useQuery({
        queryKey:['accessories'],
        queryFn: async() => {
            try{
                const res = await fetch('http://localhost:5000/categories/accessories',{
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
                accessories.map(accessory => <ProductAccessory 
                    key={accessory._id}
                    accessory={accessory}>

                    </ProductAccessory>)
            }
          </div>
            
        </div>
    );
};

export default AccessoriesProducts;