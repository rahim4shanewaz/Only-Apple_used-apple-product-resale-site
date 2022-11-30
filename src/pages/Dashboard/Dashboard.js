import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import NavBar from '../shared/navbar/NavBar';

const Dashboard = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Dashboard;