import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = ({dbUser}) => {
    return (
       
          

            <small><div className="lg:w-52 bg-base-100 shadow-xl">
            <div className="p-3">
            <div className='mb-2'>
             <h2> Role:{dbUser.role}</h2>
             <h1> {dbUser.name}</h1>
             <h1>{dbUser.email}</h1>
            </div>
             <div className="flex gap-2">
             <Link to={'/dashboard'}> <button className="btn rounded-none btn-xs">All Sellers</button></Link>
             <Link to={'/dashboard'}> <button className="btn rounded-none btn-xs">All Buyers</button></Link>
      
      
             </div>
  </div>
            </div></small>
           
            
        
    );
};

export default AdminDash;