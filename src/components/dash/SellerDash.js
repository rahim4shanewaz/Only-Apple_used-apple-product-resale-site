import React from 'react';
import { Link } from 'react-router-dom';

const SellerDash = ({dbUser}) => {
    return (
        
        <small><div className="lg:w-52 bg-base-100 shadow-xl">
            <div className="p-3">
            <div className='mb-2'>
             <h2> Role: {dbUser.role}</h2>
             <h1> {dbUser.name}</h1>
             <h1>{dbUser.email}</h1>
            </div>
             <div className="flex flex-col gap-2">
             <Link to={'/dashboard/sellers/allproducts'}> <button className="btn rounded-none btn-xs">My Products</button></Link>
             <Link to={'/dashboard/sellers/addproducts'}> <button className="btn rounded-none btn-xs">Add Products</button></Link>
      
      
             </div>
  </div>
            </div></small>
    );
};

export default SellerDash;


