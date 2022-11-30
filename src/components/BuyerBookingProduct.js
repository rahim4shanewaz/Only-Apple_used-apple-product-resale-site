import React from 'react';

const BuyerBookingProduct = ({product, handleDeleteProduct}) => {
    return (
        <div>

            <div className='flex gap-5 p-3 shadow bg-slate-50  items-center'>
                <img className='h-14 w-14 object-cover' src={product.img} alt="" />
                <h1 className='text-3xl font-bold'>{product.product}</h1>
                <button className='font-bold py-1 px-2 shadow bg-slate-200 text-red-400' onClick={() => handleDeleteProduct(product._id)} >Delete order</button>

            </div>
            
        </div>
    );
};

export default BuyerBookingProduct;