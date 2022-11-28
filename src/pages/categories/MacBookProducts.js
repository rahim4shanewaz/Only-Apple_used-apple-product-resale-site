import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductMacBook from './ProductMacBook';

const MacBookProducts = () => {
    const {data: macBooks = [], refetch} =useQuery({
        queryKey:['macBooks'],
        queryFn: async() => {
            try{
            const res = await fetch('http://localhost:5000/categories/macBook', {
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
            <h1>this is All MackBook products</h1>
            <h1>length: {macBooks.length}</h1>
          <div className='grid grid-cols-3'>
          {
                macBooks.map(macBook => <ProductMacBook 
                    key={macBook._id}
                    macBook={macBook}>

                    </ProductMacBook>)
            }
          </div>
        </div>
    );
};

export default MacBookProducts;