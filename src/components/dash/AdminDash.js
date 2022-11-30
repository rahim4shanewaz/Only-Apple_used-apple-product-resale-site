import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = ({dbUser}) => {

    // admin dashboard
    return (
       
          

            <small><div className="lg:w-52  text-white border shadow-xl">
            <div className="p-3">
            <div className='mb-2'>
             <h2 className='text-xl'>{dbUser.role}</h2>
             <h1 className='text-black font-bold'> {dbUser.name}</h1>
             <h1 className='text-black font-bold'>{dbUser.email}</h1>
            </div>
             <div className="flex gap-2">
             <Link to={'/dashboard/allsellers'}> <button className="btn rounded-none btn-xs">All Sellers</button></Link>
             <Link to={'/dashboard/allbuyers'}> <button className="btn rounded-none btn-xs">All Buyers</button></Link>
      
      
             </div>
  </div>
            </div></small>
           
            
        
    );
};

export default AdminDash;