import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../shared/navbar/NavBar';

const Dashboard = () => {
    return (
        <div>
           <NavBar></NavBar>
           <div>
          
            <ul className='flex gap-5 text-teal-400 font-bold p-4 border'>
                <li><Link to="/dashboard">Admin</Link></li>
                <li><Link to="/dashboard/buyers">All Buyer</Link></li>
                <li><Link to="/dashboard/sellers">All Sellers</Link></li>
               
            </ul>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;