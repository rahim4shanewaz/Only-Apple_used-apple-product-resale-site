import React from 'react';
import { Outlet } from 'react-router-dom';
import DashPanel from '../components/dash/DashPanel';
import Footer from '../pages/shared/footer/Footer';
import NavBar from '../pages/shared/navbar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <DashPanel></DashPanel> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;