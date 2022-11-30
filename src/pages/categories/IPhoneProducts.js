import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalIphone from './bookingModal/BookingModalIphone';
import ProductIphone from './ProductIphone';
import iphone from '../../assets/icons/icons8-iphone-se.gif';

const IPhoneProducts = () => {
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
                    <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
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