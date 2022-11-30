import React from 'react';
import { Link } from 'react-router-dom';

const MackBook = ({mackBook}) => {
    return (
        <div className='mb-5'>
       {/* <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
  <figure><img className='h-full object-cover' src={mackBook.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{mackBook.name}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Nowssssssssss</button>
    </div>
  </div>
</div> */}








<div className="card w-11/12 h bg-slate-50 glass rounded-none">
 <div className='img-h'>
 <img className='h-full w-full object-cover' src={mackBook.img} alt="car!"/>
 </div>
  <small>
  <div className="card-body">
    <h2 className="card-title">{mackBook.name}</h2>
    <p>Sell Price: ${mackBook.selling_price}</p>
    <p>Sell Price: ${mackBook.original_price}</p>
    <div className="card-actions justify-end">
    <div>
               <Link to={"/category/macbook"}> <button className="btn btn-outline btn-secondary">See All Products</button></Link>
               </div>
    </div>
  </div>
  </small>
</div>

            
        </div>
    );
};

export default MackBook;