import React from 'react';

const ProductAccessory = ({accessory,setBooking,refetch }) => {
    return (
        <div className='p-10'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={accessory.img} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="card-title">{accessory.name}</h2>
 <p>If a dog chews shoes whose shoes does he choose?</p>
 <div className="card-actions justify-end">
 {accessory?.booking ? 
    <button className="btn btn-primary">This Product is not Available</button>
     :
      <label onClick={() => setBooking(accessory)} htmlFor="my-modal-3" className="btn">open modal</label>
     }
 </div>
</div>
</div>

         
     </div>
    );
};

export default ProductAccessory;