import React from 'react';

const Accessories = ({accessory}) => {
    return (
        <div>
             {/* <div>
                <div className='mb-5'>
       <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
  <figure><img className='h-full' src={accessory.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{accessory.name}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
            
        </div> */}
           <div className="card w-full bg-slate-50 glass rounded-none">
  <figure><img className='w-full h-42 object-cover' src={accessory.img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        
            
        </div>
    );
};

export default Accessories;