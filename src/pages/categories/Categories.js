
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Accessories from './accessories/Accessories';
import Iphone from './iphone/Iphone';
import MackBook from './macbook/MackBook';


const Categories = () => {
    const [macBooks, setMacBooks] = useState([])
    const [iphones, setIphones] = useState([])
    const [accessories, setAccessories] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/macBook')
        .then(res =>res.json())
        .then(data => setMacBooks(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/iphone')
        .then(res =>res.json())
        .then(data => setIphones(data))
    },[])


    useEffect(() => {
        fetch('http://localhost:5000/accessories')
        .then(res =>res.json())
        .then(data => setAccessories(data))
    },[])


    return (
       
            
                 <div>
            
            <div className='grid grid-cols-3 gap-5 m-10'>
               <div>

                {
                    macBooks.map(mackBook => <MackBook 
                    key={mackBook._id}
                    mackBook={mackBook}
                    >  
                    </MackBook>)
                }

                 <Link to={"/category/macbook"}> <button className="btn btn-outline btn-secondary">See All Products</button></Link>

               </div>

               <div>
                {
                    iphones.map(iphone => <Iphone 
                        key={iphone._id}
                        iphone={iphone}
                        >  
                        </Iphone>)
                }
                 <Link to={'/category/iphone'}> <button className="btn btn-outline btn-secondary">See All Products</button></Link>
               </div>

               <div>
                {
                    accessories.map(accessory => <Accessories 
                        key={accessory._id}
                        accessory={accessory}
                        >  
                        </Accessories>)
                }
                 <Link to={'/category/accessories'}> <button className="btn btn-outline btn-secondary">See All Products</button></Link>
               </div>
            </div>
            </div>
            
            
           
            
            
      
    );
};

export default Categories;