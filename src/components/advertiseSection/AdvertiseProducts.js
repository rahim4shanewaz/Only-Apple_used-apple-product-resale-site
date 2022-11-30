import React from 'react';

const AdvertiseProducts = ({product}) => {
    return (
        <div>
             <div className='p-10'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={product.img} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="card-title">{product.name}</h2>
 <p>If a dog chews shoes whose shoes does he choose?</p>
 <div className="card-actions justify-end">
 
 </div>
</div>
</div>

         
     </div>
            
        </div>
    );
};

export default AdvertiseProducts;