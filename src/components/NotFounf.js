import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/404-error-page-not-found.jpg'
import useHooks from './useTitles';

// not found page

const NotFounf = () => {
  useHooks('Not Found')
    return (
        <div>


<div className='m-10 p-10 flex justify-center'>
            <div className="hero min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-md text-center">
   <div className='shadow-2xl'>
   <img src={img} alt="" />
   </div>
    <div className='mt-10'>
    <Link to={'/'}> <button className="bg-slate-400 px-5 shadow-2xl py-2">Go back Our Site</button></Link>
    </div>
    </div>
  </div>
</div>
            
        </div>
            
        </div>
    );
};

export default NotFounf;