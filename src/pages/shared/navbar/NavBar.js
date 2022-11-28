import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DashPanel from '../../../components/dash/DashPanel';
import { AuthContext } from '../../../Context/ContextApi';

const NavBar = () => {

  const { user, userRole, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }






  const menuItems = <React.Fragment>
    <li><Link to={'/'}> <small>HOME</small> </Link></li>
    <div className="divider divider-horizontal"></div>
   
    <li><Link to={'/'}> <small>CATEGORIES</small> </Link></li>
    <div className="divider divider-horizontal"></div>
    
 {/* {user?.email ?
     <li><Link to="/dashboard">Dashboard <small className='text-green-400 font-bold'>{userRole}</small></Link></li>
     :
     <li><Link to={'/dashboard'}>Dashboard</Link></li>
 } */}
 

    {user?.uid ?
            <>
                
                <li><button className='text-red-400' onClick={handleLogOut}> <small>LOGOUT</small> </button></li>
                
            </>
               :  <>
               <li><Link to={'/register'}> <small>REGISTER</small> </Link></li>
                <li><Link to="/login"> <small>LOGIN</small> </Link></li>
                </> 
                }
               

  </React.Fragment>




    return (
      <div>
       






         

          <div className='lg:absolute lg:right-14 lg:top-44' data-aos="fade-left" data-aos-duration="1500">
        <DashPanel></DashPanel>
     
          </div>
         

       




         





        <div className='w-full h-40 hidden lg:flex items-center justify-between lg:px-20'>

            <div className='flex gap-2 text-stone-800 font-semibold' data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500">
              <small><p>HOME</p></small>
              <div className="divider divider-horizontal"></div>
             <small> <p>BLOG</p></small>
            </div>

            <div>
              <h1 className='text-4xl'>Buy & Sell</h1>
            </div>

            <div className='flex gap-2  text-stone-800 font-semibold' data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500">
              <small><p>CONTACT</p></small>
              <div className="divider divider-horizontal"></div>
              <small><p>ABOUT</p></small>
            </div>

          </div>



          <div>
          <div className="bg-stone-800">

                      <div className="navbar-start bg-stone-800">
                        <div className="dropdown bg-stone-800">
                          <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                          </label>
                          <ul tabIndex={0} className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow-xl bg-stone-800 rounded-box w-52">
                          {menuItems}
                          </ul>
                        </div>
                        {/* <Link to={'/'} className="btn btn-ghost normal-case text-xl">BUY & SELL</Link> */}
                      </div>

              <div className=" hidden lg:flex  flex-col items-center justify-center">
                <ul className="flex gap-3 mb-3 font-semibold text-white ">
                  {menuItems}
                </ul>
              </div>
              
                          
        </div>
          </div>
      </div>
        
    );
};

export default NavBar;