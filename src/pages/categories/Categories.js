
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextApi';
import Accessories from './accessories/Accessories';
import Iphone from './iphone/Iphone';
import MackBook from './macbook/MackBook';


const Categories = () => {
    const { user, logOut } = useContext(AuthContext);
    const [macBooks, setMacBooks] = useState([])
    const [iphones, setIphones] = useState([])
    const [accessories, setAccessories] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/macBook',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => setMacBooks(data))
    },[user?.email, logOut])

    useEffect(() => {
        fetch('http://localhost:5000/iphone',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => setIphones(data))
    },[user?.email, logOut])


    useEffect(() => {
        fetch('http://localhost:5000/accessories',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => setAccessories(data))
    },[user?.email, logOut])


    return (
       
            
                 <div>
            
            <div className='grid grid-cols-1 gap-5 m-10'>
               <div className='grid grid-cols-2 gap-10 border border-slate-300 p-5' >
                {
                    
                    macBooks.map(mackBook => <MackBook 
                    key={mackBook._id}
                    mackBook={mackBook}
                    >  
                    </MackBook>)
                }
               </div>








               <div className='grid grid-cols-2 gap-10 border'>
                {
                    iphones.map(iphone => <Iphone 
                        key={iphone._id}
                        iphone={iphone}
                        >  
                        </Iphone>)
                }
                 <Link to={'/category/iphone'}> <button className="btn btn-outline btn-secondary">See All Products</button></Link>
               </div>

               <div className='grid grid-cols-2 gap-10'>
                {
                    accessories.map(accessory => <Accessories 
                        key={accessory._id}
                        accessory={accessory}
                        >  
                        </Accessories>)
                }
               <div>  <Link to={'/category/accessories'}> <button className="btn btn-outline btn-secondary">See All Products</button></Link></div>
               </div>
            </div>
            </div>
            
            
           
            
            
      
    );
};

export default Categories;