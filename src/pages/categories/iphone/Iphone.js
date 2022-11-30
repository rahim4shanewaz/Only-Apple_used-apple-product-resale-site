import React from 'react';
import { Link } from 'react-router-dom';

const Iphone = ({iphone}) => {
  const description = iphone.description.slice(1,500)
    return (
      <div className='mb-5'>
    
      <div className="card w-11/12  bg-slate-50 glass rounded-none">
       <div className='img-h'>
       <img className='h-full w-full object-cover' src={iphone.img} alt="car!"/>
       </div>
        <small>
        <div className=" p-5">
          <h2 className="card-title mb-3 text-slate-700 ">{iphone.name}</h2>
          <hr />
      
      
          
      <div className=' flex justify-between mt-3'>
      <div>
        <div className='flex gap-10 justify-start'>
         <p className='font-bold text-slate-700 '>Sell Price: <span className='text-green-400 font-bold '> $</span> {iphone.selling_price}</p>
          <p className='font-bold text-slate-700 '>Original Price:<span className='text-green-400 font-bold'> $</span> {iphone.original_price}</p>
         </div>
         <div className='flex gap-10 justify-start '>
         <p className='font-bold text-slate-700 '>Year Of Purchase: {iphone.purchase_year}</p>
          <p className='font-bold text-left text-slate-700 '>Year Of Use: {iphone.use_year}</p>
         </div>
          <p className='font-bold text-slate-700 '>Condition: <span className='text-green-400 font-bold'>{iphone.condition}</span> </p> 
        </div>
      
      
        <div>
        
                <p  className='font-bold text-slate-500 '>{iphone.seller_email}</p>
                <p  className='font-bold text-slate-500 '>{iphone.number}</p>
                <p  className='font-bold text-slate-500 '>{iphone.location}</p>
        </div>
      </div>
      
      
      
      
      
          <p className='font-bold mt-2 text-slate-700 '>Descriptions: </p> 
          <p className='font-bold text-slate-500 '>{description} </p>
          <div className="">
           
          
                     <div data-aos="fade-right" data-aos-anchor="#example-anchor"
           data-aos-offset="500" data-aos-duration="1500">
           
      
               <Link to={'/category/iphone'}> <small> <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">See all Products </button></small> </Link>
              
               </div>
              
          </div>
        </div>  
        </small>
       
      </div>
      
                  
              </div>
    );
};

export default Iphone;