import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalIphone from './bookingModal/BookingModalIphone';
import ProductIphone from './ProductIphone';
import iphone from '../../assets/icons/icons8-iphone-se.gif';
import { Link } from 'react-router-dom';
import useHooks from '../../components/useTitles';

const IPhoneProducts = () => {
    useHooks('iphone')
    const [booking, setBooking] = useState(null)
    
    const {data: iphones= [], isLoading, refetch} =useQuery({
        queryKey:['iphones'],
        queryFn: async() => {
            try{

            const res = await fetch('https://final-server-lovat.vercel.app/categories/iphone', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
        catch (error) {

        }
        }
    })







    return (
        <div>
           <div className='text-center lg:mt-20 flex gap-3 justify-center'>
                    <div>
                    <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
                    <small className='flex font-bold gap-2'> <Link to={'/category/macbook'}> <small> <button className='hover:px-2 hover:py-1 hover:bg-slate-400 bg-slate-200 px-1' >MACKBOOK</button></small> </Link> 
                   <Link to={'/category/accessories'}> <small> <button className='hover:px-2 hover:py-1 hover:bg-slate-400 bg-slate-200 px-1' >ACCESSORIES</button></small> </Link> 
                   
                    </small>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <h1 className='text-xl text-slate-500 font-bold'>IPHONE</h1>
                    <div className="divider divider-horizontal"></div>
                    <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={iphone} alt="" />
                    
                    </div>
            <div  className='grid lg:grid-cols-2 mt-28'>
          {
                iphones.map(iphone => <ProductIphone 
                    key={iphone._id}
                    iphone={iphone}
                    setBooking={setBooking}
                    refetch={refetch}>

                    </ProductIphone>)
            }
          </div>
          {booking &&
             <BookingModalIphone
             booking={booking}
             setBooking={setBooking}
             refetch={refetch}
             isLoading={isLoading}></BookingModalIphone>
           }
            
        </div>
    );
};

export default IPhoneProducts;