import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.jpg'
import bg1 from '../../assets/images/bg.png'
import apple from '../../assets/icons/icons8-apple-logo.gif'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="hero w-full min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className=" bg-opacity-50"></div>
      <div className="hero-content w-full text-center text-neutral-content">
        <div className='w-full flex flex-col justify-center items-center' >

         <div className='boxShadow  text-center' data-aos="fade-up" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500">
         <div className='text-slate-800 text-center flex flex-col justify-center items-center p-10 lg:p-20'>
          
          <h1 className='font text-6xl mb-5'>APPLE ONLY</h1>
          <h1  className='font-semibold'>Buy Only APPLE Product</h1>
          <h1  className='font-semibold'>Search your Desire Premium </h1>
          <h1>All  <span className='text-3xl'>REFURBISHED</span> and <span className='text-3xl'>USED</span></h1>
          <div className='flex gap-4 mt-5'>
          <Link to={'/category/macbook'}> <small> <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none sdw bg-slate-400">mackBook</button></small> </Link>
            <div className="divider divider-horizontal"></div>
            <Link to={'/category/iphone'}> <small> <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none sdw bg-slate-400">iphone</button></small> </Link>
            <div className="divider divider-horizontal"></div>
            <Link to={'/category/accessories'}> <small> <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none sdw bg-slate-400">accessories</button></small> </Link>
          </div>
         
         </div>
         </div>
         <div className='flex gap-10 mt-5'>
       
       
        
        
           
           
          </div>
        
        </div>
      </div>
    </div>
    );
};

export default Banner;