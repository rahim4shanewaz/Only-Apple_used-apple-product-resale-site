import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import useHooks from '../../components/useTitles';

import { AuthContext } from '../../Context/ContextApi';
import Loading from '../shared/loading/Loading';
import Product from './Product';

const Allproducts = () => {
    useHooks('My Products')
    const { user, loading, dbUser } = useContext(AuthContext);
    // console.log(dbUser._id)

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://final-server-lovat.vercel.app/seller/products?id=${dbUser._id}`);
                const data = await res.json();
               
               
                return data;
            }
            catch (error) {

            }
        }
    });

   
    const handleDeleteProduct = product => {
        fetch(`https://final-server-lovat.vercel.app/seller/product/${product._id}`, {
            method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
              
                toast.success(`Seller ${product.name} deleted successfully`)
            }
            refetch();
        })
    }



    if (isLoading) {
      
        return <Loading></Loading>
    }
    return (
        <div className='mt-28'>

            <h1 className='text-4xl text-center'>My All Added Products</h1>
      
       <div  className='grid grid-cols-3 items-start p-10 gap-2 '>
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