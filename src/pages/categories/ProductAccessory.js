import React from 'react';
import { Link } from 'react-router-dom';

const ProductAccessory = ({accessory,setBooking,refetch }) => {
    const description = accessory.description.slice(1,500)
    return (
        <div className='p-10'>
       



<div className='mb-5'>
    
    <div className=" bg-slate-50 glass rounded-none">
     <div className='img-h'>
     <img className='h-full w-full object-cover' src={accessory.img} alt="car!"/>
     </div>
      <small>
      <div className=" p-5">
        <h2 className="card-title mb-3 text-slate-700 ">{accessory.name}</h2>
        <hr />
    
    
        
    <div className=' flex justify-between mt-3'>
    <div>
      <div className='flex gap-10 justify-start'>
       <p className='font-bold text-slate-700 '>Sell Price: <span className='text-green-400 font-bold '> $</span> {accessory.selling_price}</p>
        <p className='font-bold text-slate-700 '>Original Price:<span className='text-green-400 font-bold'> $</span> {accessory.original_price}</p>
       </div>
       <div className='flex gap-10 justify-start '>
       <p className='font-bold text-slate-700 '>Year Of Purchase: {accessory.purchase_year}</p>
        <p className='font-bold text-left text-slate-700 '>Year Of Use: {accessory.use_year}</p>
       </div>
        <p className='font-bold text-slate-700 '>Condition: <span className='text-green-400 font-bold'>{accessory.condition}</span> </p> 
      </div>
    
    
      <div>
      
              <p  className='font-bold text-slate-500 '>{accessory.seller_email}</p>
              <p  className='font-bold text-slate-500 '>{accessory.number}</p>
              <p  className='font-bold text-slate-500 '>{accessory.location}</p>
      </div>
    </div>
    
    
    
    
    
        <p className='font-bold mt-2 text-slate-700 '>Descriptions: </p> 
        <p className='font-bold text-slate-500 '>{description} </p>
        <div className="">
         
        
                   <div data-aos="fade-right" data-aos-anchor="#example-anchor"
         data-aos-offset="500" data-aos-duration="1500">
         
    
         <div className="card-actions justify-end">
 {accessory?.booking ? 
    <button disabled className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">This Product is not Available</button>
     :
      <label onClick={() => setBooking(accessory)} htmlFor="my-modal-3" className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Booking Now</label>
     }
 </div>
            
             </div>
            
        </div>
      </div>  
      </small>
     
    </div>
    
                
            </div>






















         
     </div>
    );
};

export default ProductAccessory;