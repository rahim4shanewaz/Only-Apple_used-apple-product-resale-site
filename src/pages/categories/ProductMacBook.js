import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/ContextApi';
import BookingModal from './bookingModal/BookingModal';
import MackBook from './macbook/MackBook';


const ProductMacBook = ({macBook , setBooking, refetch}) => {

 


    return (
        <div className='p-10'>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={macBook.img} alt="Shoes" /></figure>
  <div className="card-body">

    <h2 className="card-title">{macBook.name}</h2>



    <h2 className="card-title">{macBook.booking}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     {macBook?.booking ? 
    <button className="btn btn-primary">This Product is not Available</button>
     :
      <label onClick={() => setBooking(macBook)} htmlFor="my-modal-3" className="btn">open modal</label>
     }
      
     
     



    </div>
  </div>
           </div>
        
        </div>
    );
};

export default ProductMacBook;