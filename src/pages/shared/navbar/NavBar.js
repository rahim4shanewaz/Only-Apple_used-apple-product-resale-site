import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import DashPanel from '../../../components/dash/DashPanel';
import { AuthContext } from '../../../Context/ContextApi';
import apple from '../../../assets/icons/icons8-apple-logo.gif'

const NavBar = () => {

  const { user, userRole, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
          
    }




// menubar dynamic

  const menuItems = <React.Fragment>

    <li><Link to={'/category/macbook'}> <small className='hover:text-green-500'>MACBOOK</small> </Link></li>
    <li><Link to={'/category/iphone'}> <small className='hover:text-green-500'>IPHONE</small> </Link></li>
    <li><Link to={'/category/accessories'}> <small className='hover:text-green-500'>ACCESSORIES</small> </Link></li>
    <div className="divider divider-horizontal"></div>
    <li><Link to={'/'}> <small className='hover:text-green-500'>HOME</small> </Link></li>
    
    <div className="divider divider-horizontal"></div>
   
    <li><Link to={'/blog'}> <small className='hover:text-green-500'>BLOG</small> </Link></li>
    

  
    
    {user?.uid ?
            <>
                
                <li><button className='text-red-400' onClick={handleLogOut}> <small className='hover:text-white'>LOGOUT</small> </button></li>
                
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
            <Link to={'/blog'}> <small>BLOG</small> </Link>
              <div className="divider divider-horizontal"></div>
              <Link to={'/'}> <small>ABOUT US</small> </Link>
            </div>

            <div  className='  p-5 flex flex-col justify-center items-center'>
             <img data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" data-aos="fade-down"  className='h-14 w-14' src={apple} alt="" />
             <p className='style-font text-xl font-semibold'>APPLE ONLY</p>
            </div>

            <div className='flex gap-2  text-stone-800 font-semibold' data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500">
              <Link to={'/contact'}> <small>CONTACT US</small> </Link>
              <div className="divider divider-horizontal"></div>
              <Link  to={'/'}> <small>FAQ</small> </Link>
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