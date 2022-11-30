import React from 'react';
import { Link } from 'react-router-dom';

const NotFounf = () => {
    return (
        <div>


<div className='m-10 p-10 flex justify-center'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md text-center">
      <h1 className="text-5xl text-center p-3 font-bold">Opps !</h1>
      <h1 className="text-6xl text-center p-3 text-red-700  font-bold">404</h1>
      <p className="py-6"></p>
     <Link to={'/'}> <button className="btn btn-primary">Go back Our Site</button></Link>
    </div>
  </div>
</div>
            
        </div>
            
        </div>
    );
};

export default NotFounf;