import React from 'react';
import { Link } from 'react-router-dom';
import verify from '../../assets/icons/icons8-approval.gif';


const SellerDash = ({dbUser}) => {

  //seller dash board
    return (
        
        <small><div className="lg:w-52 text-white border shadow-xl">
            <div className="p-3">
            <div className='mb-2'>


            <div className='flex gap-1 items-center'>
            <h2 className='text-xl'>{dbUser.role}</h2>
            <div>
              { dbUser?.verify ?
                
                <div>
                    <img className='w-4 h-4' src={verify} alt="" />
                </div>
                :
                <div>
                    <small className='text-red-400 font-bold'><p>Not Verified</p></small>
                </div>
              }
                
               
            </div>
           
            </div>
            <h1 className='text-black font-bold'> {dbUser.name}</h1>
             <h1 className='text-black font-bold'>{dbUser.email}</h1>
            </div>
             <div className="flex flex-col justify-end items-end gap-2">
             <Link to={'/dashboard/sellers/allproducts'}> <button className="btn rounded-none btn-xs">My Products</button></Link>
             <Link to={'/dashboard/sellers/addproducts'}> <button className="btn rounded-none btn-xs">Add Products</button></Link>
      
      
             </div>
  </div>
            </div></small>
    );
};

export default SellerDash;


