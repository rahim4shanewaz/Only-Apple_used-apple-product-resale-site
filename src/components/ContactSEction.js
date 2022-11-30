import React from 'react';
import plane from '../assets/icons/icons8-paper-plane.gif'

const ContactSEction = () => {
    return (

        <div className='mt-10  mx-20 p-20 shadow-xl'>
         <div >
  <div className=" grid grid-cols-2 justify-center items-center " >
  
    <div className="   bg-base-100">
      <div className="">

      <div className="">
          <label className="label">
            <span className="label-text font-bold text-slate-700">Your Thought</span>
          </label>
          <textarea className="textarea h-48 w-48 input-bordered  rounded-none" placeholder="Write Here"></textarea>
            
        </div>
        <div className="">
          <label className="label">
            <span className="label-text font-bold text-slate-700">Email</span>
          </label>
          <input type="text" placeholder="email" className="input rounded-none input-bordered" />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text font-bold text-slate-700">Address</span>
          </label>
          <input type="text" placeholder="address" className="input rounded-none input-bordered" />
         
        </div>
        <div className=" mt-6">
          <button className="btn btn-primary">send</button>
        </div>
      </div>
    </div>

    <div>
       
        <img src={plane} alt="" />
    </div>


  </div>
         </div>

        </div>
    );
};

export default ContactSEction;