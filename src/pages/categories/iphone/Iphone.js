import React from 'react';

const Iphone = ({iphone}) => {
    return (
        <div>
                <div className='mb-5'>
       <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
  <figure><img className='h-full' src={iphone.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{iphone.name}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
        
            
        </div>
    );
};

export default Iphone;