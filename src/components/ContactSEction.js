import React from 'react';
import { Link } from 'react-router-dom';
import plane from '../assets/icons/icons8-paper-plane.gif'

const ContactSEction = () => {
    return (

  //       <div className='mt-10  mx-20 p-20 shadow-xl'>
  //        <div >
  // <div className=" grid grid-cols-2 justify-center items-center " >
  
  //   <div className="   bg-base-100">
  //     <div className="">

  //     <div className="">
  //         <label className="label">
  //           <span className="label-text font-bold text-slate-700">Your Thought</span>
  //         </label>
  //         <textarea className="textarea h-48 w-48 input-bordered  rounded-none" placeholder="Write Here"></textarea>
            
  //       </div>
  //       <div className="">
  //         <label className="label">
  //           <span className="label-text font-bold text-slate-700">Email</span>
  //         </label>
  //         <input type="text" placeholder="email" className="input rounded-none input-bordered" />
  //       </div>
  //       <div className="">
  //         <label className="label">
  //           <span className="label-text font-bold text-slate-700">Address</span>
  //         </label>
  //         <input type="text" placeholder="address" className="input rounded-none input-bordered" />
         
  //       </div>
  //       <div className=" mt-6">
  //         <button className="btn rounded-none">send</button>
  //       </div>
  //     </div>
  //   </div>

  //   <div>
       
  //       <img src={plane} alt="" />
  //   </div>


  // </div>
  //        </div>

  //       </div>
  <div className='h-[800px] flex justify-center items-center '>
    <div>
      <img src={plane} alt="" />
    </div>
            <div className='w-96  p-10 shadow-xl'>
                <h2 className='text-3xl font-bold text-center'>Share Your Any Thought With Us</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold"></span></label>
                        <input type="text" placeholder='TYPE HERE'
                            
                            className="input h-48 input-bordered rounded-none w-full " />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold"></span></label>
                        <input type="password"
                        placeholder='Email'
                           
                            className="input input-bordered rounded-none w-full max-w-xs" />
                       
                     
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold"></span></label>
                        <input type="password"
                        placeholder='ADDRESS'
                           
                            className="input input-bordered rounded-none w-full max-w-xs" />
                       
                     
                    </div>
                    <input disabled className="btn mt-3 mb-10  rounded-none btn-sm outline-none border-none shadow-xl bg-slate-400" value="Submit" type="submit" />
                    <div>
                      
                    </div>
                </form>
               
                <div className="divider">OR</div>
               
            </div>
        </div>
    );
};

export default ContactSEction;