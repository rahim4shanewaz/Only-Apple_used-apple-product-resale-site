import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductAccessory from './ProductAccessory';

const AccessoriesProducts = () => {

    const {data: accessories = [], refetch} =useQuery({
        queryKey:['accessories'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories/accessories');
            const data = await res.json();
            return data;
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