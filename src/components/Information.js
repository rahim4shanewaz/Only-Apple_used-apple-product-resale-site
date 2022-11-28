
import React from 'react';
import users from '../assets/icons/icons8-people.gif'
import bag from '../assets/icons/icons8-shopping-bag.gif'
import widget from '../assets/icons/icons8-fidget-spinner.gif'
import location from '../assets/icons/icons8-location.gif'
import products from '../assets/icons/icons8-box.gif'
import categories from '../assets/icons/icons8-cheap.gif'


const Information = () => {
    return (
        <div>
            <div className='w-full h-96 p-10'>
               <div className='my-10'>
               <p className=' style-font text-center'>alysum theme</p>
                <h1 className='text-center text-3xl'>BY THE NUMBERS</h1>
               </div>
               <div className='flex gap-8 justify-evenly'>
             
              
              <div className='flex flex-col items-center gap-3'>
                <img className='w-28 h-28' src={users} alt="" />  
                <h1 className='font-semibold'>USERS</h1>
                <h1 className='font-semibold text-2xl'>1865</h1>
                </div>
              
              <div  className='flex flex-col items-center gap-3'>
                <img className='w-28 h-28' src={bag} alt="" />
                <h1 className='font-semibold'>Sold Products</h1>
                <h1 className='font-semibold text-2xl'>1155</h1>
                </div>
              <div  className='flex flex-col items-center gap-3'>
                <img className='w-28 h-28' src={categories} alt="" />
                <h1 className='font-semibold'>Categories</h1>
                <h1 className='font-semibold text-2xl'>3</h1>
                </div>
              <div  className='flex flex-col items-center gap-3'>
                <img className='w-28 h-28' src={location} alt="" />
                <h1 className='font-semibold'>Available Locations</h1>
                <h1 className='font-semibold text-2xl'>64</h1>
                </div>
              <div  className='flex flex-col items-center gap-3'>
                <img className='w-28 h-28' src={products} alt="" />
                <h1 className='font-semibold'>Products</h1>
                <h1 className='font-semibold text-2xl'>889</h1>
                </div>
            
             
                        

               </div>


            </div>
            
        </div>
    );
};

export default Information;