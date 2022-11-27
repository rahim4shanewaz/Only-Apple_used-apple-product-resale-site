import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.jpg'
import bg1 from '../../assets/images/bg.png'

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg1})` }}>
      <div className=" bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;