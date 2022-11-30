import React from 'react';

const MackBook = ({mackBook}) => {
    return (
        <div className='mb-5'>
       <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
  <figure><img className='h-full object-cover' src={mackBook.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{mackBook.name}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Nowssssssssss</button>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default MackBook;