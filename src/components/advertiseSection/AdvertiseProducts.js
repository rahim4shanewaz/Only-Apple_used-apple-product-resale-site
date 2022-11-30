import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseProducts = ({product, refetch}) => {
  
    return (
        <div className='mb-5'>
    
        <div className="card   bg-slate-50 glass rounded-none">
         <div className='img-h1'>
         <img className=' img-h1 object-cover' src={product.img} alt="car!"/>
         </div>
          <small>
          <div className=" p-5">
           <div className='flex justify-between'>
           <h2 className="card-title mb-1 font-bold text-slate-700 ">{product.name}</h2>
           <p className=' text-red-700 font-bold'>Advertised</p>
           </div>

            <hr />
        
        
            
        <div className=' flex flex-col justify-between mt-1'>
        <div>
          <div className='flex gap-10 justify-start'>
           <p className='font-bold text-slate-700 '>Sell Price: <span className='text-green-400 font-bold '> $</span> {product.selling_price}</p>
           
           </div>
        
            <p className='font-bold text-slate-700 '>Condition: <span className='text-green-400 font-bold'>{product.condition}</span> </p> 
          </div>
    
         
        </div>
    
            <div className="">
            
                       <div data-aos="fade-right" data-aos-anchor="#example-anchor"
             data-aos-offset="500" data-aos-duration="1500">
             
        
                 <Link to={`/category/${product.category}`}> <small> <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Click Here for Book </button></small> </Link>
                
                 </div>
                
            </div>
          </div>  
          </small>
         
        </div>
        
                    
                </div>
    );
};

export default AdvertiseProducts;