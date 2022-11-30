import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/ContextApi';
import BookingModal from './bookingModal/BookingModal';
import MackBook from './macbook/MackBook';


const ProductMacBook = ({macBook , setBooking, refetch}) => {
  const description = macBook.description.slice(1,500)

 


    return (
  //       <div className='p-10'>
  //          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  // <figure><img src={macBook.img} alt="Shoes" /></figure>
  // <div className="card-body">

  //   <h2 className="card-title">{macBook.name}</h2>



  //   <h2 className="card-title">{macBook.booking}</h2>
  //   <p>If a dog chews shoes whose shoes does he choose?</p>
  //   <div className="card-actions justify-end">
  //    {macBook?.booking ? 
  //   <button className="btn btn-primary">This Product is not Available</button>
  //    :
  //     <label onClick={() => setBooking(macBook)} htmlFor="my-modal-3" className="btn">open modal</label>
  //    }
      
     
     



  //   </div>
  // </div>
  //          </div>
        
  //       </div>
  <div className='p-10'>
       



  <div className='mb-5'>
      
      <div className=" bg-slate-50 glass rounded-none">
       <div className='img-h'>
       <img className='h-full w-full object-cover' src={macBook.img} alt="car!"/>
       </div>
        <small>
        <div className=" p-5">
          <h2 className="card-title mb-3 text-slate-700 ">{macBook.name}</h2>
          <hr />
      
      
          
      <div className=' flex justify-between mt-3'>
      <div>
        <div className='flex gap-10 justify-start'>
         <p className='font-bold text-slate-700 '>Sell Price: <span className='text-green-400 font-bold '> $</span> {macBook.selling_price}</p>
          <p className='font-bold text-slate-700 '>Original Price:<span className='text-green-400 font-bold'> $</span> {macBook.original_price}</p>
         </div>
         <div className='flex gap-10 justify-start '>
         <p className='font-bold text-slate-700 '>Year Of Purchase: {macBook.purchase_year}</p>
          <p className='font-bold text-left text-slate-700 '>Year Of Use: {macBook.use_year}</p>
         </div>
          <p className='font-bold text-slate-700 '>Condition: <span className='text-green-400 font-bold'>{macBook.condition}</span> </p> 
        </div>
      
      
        <div>
        
                <p  className='font-bold text-slate-500 '>{macBook.seller_email}</p>
                <p  className='font-bold text-slate-500 '>{macBook.number}</p>
                <p  className='font-bold text-slate-500 '>{macBook.location}</p>
        </div>
      </div>
      
      
      
      
      
          <p className='font-bold mt-2 text-slate-700 '>Descriptions: </p> 
          <p className='font-bold text-slate-500 '>{description} </p>
          <div className="">
           
          
                     <div data-aos="fade-right" data-aos-anchor="#example-anchor"
           data-aos-offset="500" data-aos-duration="1500">
           
      
           <div className="card-actions justify-end">
   {macBook?.booking ? 
      <button disabled className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">This Product is not Available</button>
       :
        <label onClick={() => setBooking(macBook)} htmlFor="my-modal-3" className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Booking Now</label>
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

export default ProductMacBook;