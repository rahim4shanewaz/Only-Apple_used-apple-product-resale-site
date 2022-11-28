import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductIphone from './ProductIphone';

const IPhoneProducts = () => {
    
    const {data: iphones = [], refetch} =useQuery({
        queryKey:['iphones'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories/iphone');
            const data = await res.json();
            return data;
        }
    })







    return (
        <div>
            <h1>this is iphone products</h1>
            <h1>length: {iphones.length}</h1>
            <div className='grid grid-cols-3'>
          {
                iphones.map(iphone => <ProductIphone 
                    key={iphone._id}
                    iphone={iphone}>

                    </ProductIphone>)
            }
          </div>
            
        </div>
    );
};

export default IPhoneProducts;