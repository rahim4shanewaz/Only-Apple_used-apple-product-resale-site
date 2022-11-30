import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../Context/ContextApi';
import Loading from '../shared/loading/Loading';
import Product from './Product';

const Allproducts = () => {
    const { user, loading, dbUser } = useContext(AuthContext);
    // console.log(dbUser._id)

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/seller/products?id=${dbUser._id}`, {
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
    });

   
    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/seller/product/${product._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${product.name} deleted successfully`)
            }
        })
    }



    if (isLoading) {
      
        return <Loading></Loading>
    }
    return (
        <div>
        <h1>this is all buyers sections</h1>
       <div className='grid grid-cols-3 p-20 m-20 gap-10'>
        {
            products.map(product => <Product key={product._id} handleDeleteProduct={handleDeleteProduct} product={product}
                refetch={refetch}
                isLoading={isLoading}></Product>)
        }
       </div>
       
        
    </div>
    );
};

export default Allproducts;