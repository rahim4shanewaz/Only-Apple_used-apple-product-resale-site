
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextApi';
import Accessories from './accessories/Accessories';
import Iphone from './iphone/Iphone';
import MackBook from './macbook/MackBook';
import iphone from '../../assets/icons/icons8-iphone-se.gif'
import mac from '../../assets/icons/icons8-checked-laptop.gif'
import accessory from '../../assets/icons/icons8-box.gif'


const Categories = () => {
    const { user, logOut } = useContext(AuthContext);
    const [macBooks, setMacBooks] = useState([])
    const [iphones, setIphones] = useState([])
    const [accessories, setAccessories] = useState([])


    useEffect(() => {
        fetch('https://final-server-lovat.vercel.app/macBook')
        .then(res =>  res.json())
        .then(data => setMacBooks(data))
    },[user?.email, logOut])

    useEffect(() => {
        fetch('https://final-server-lovat.vercel.app/iphone')
        .then(res =>  res.json())
        
        .then(data => setIphones(data))
    },[user?.email, logOut])


    useEffect(() => {
        fetch('https://final-server-lovat.vercel.app/accessories')
        .then(res =>  res.json())
        .then(data => setAccessories(data))
    },[user?.email, logOut])


    return (
       
            
                 <div>
            
            <div className='grid grid-cols-1 gap-5 m-10'>
            <div className='text-center flex gap-3 justify-center mt-20'>
                    <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
                    <div className="divider divider-horizontal"></div>
                    <h1 className='text-xl text-slate-500 font-bold'>MACBOOK</h1>
                    <div className="divider divider-horizontal"></div>
                    <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={mac} alt="" />
                    
                    </div>
               
               <div className='grid lg:grid-cols-2 shadow-xl p-5 mb-10' >
                {
                    
                    macBooks.map(mackBook => <MackBook 
                    key={mackBook._id}
                    mackBook={mackBook}
                    >  
                    </MackBook>)
                }
               </div>





<hr />
               <div className='text-center flex gap-3 justify-center mt-20'>
                    <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
                    <div className="divider divider-horizontal"></div>
                    <h1 className='text-xl text-slate-500 font-bold'>IPHONE</h1>
                    <div className="divider divider-horizontal"></div>

                  
         <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={iphone} alt="" />
   
                   
                    
                    </div>
                    <div className='grid lg:grid-cols-2 shadow-xl p-5 mb-10' >
                {
                    iphones.map(iphone => <Iphone 
                        key={iphone._id}
                        iphone={iphone}
                        >  
                        </Iphone>)
                }
              
               </div>

               <hr />
               <div className='text-center flex gap-3 justify-center mt-20'>
                    <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
                    <div className="divider divider-horizontal"></div>
                    <h1 className='text-xl text-slate-500 font-bold'>ACCESSORIES</h1>
                    <div className="divider divider-horizontal"></div>
                    <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={accessory} alt="" />
                    
                    </div>

                    <div className='grid lg:grid-cols-2 shadow-xl p-5' >
                {
                    accessories.map(accessory => <Accessories 
                        key={accessory._id}
                        accessory={accessory}
                        >  
                        </Accessories>)
                }
             
               </div>
            </div>
            </div>
            
            
           
            
            
      
    );
};

export default Categories;