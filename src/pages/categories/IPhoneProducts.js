import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalIphone from './bookingModal/BookingModalIphone';
import ProductIphone from './ProductIphone';

const IPhoneProducts = () => {
    const [booking, setBooking] = useState(null)
    
    const {data: iphones= [], isLoading, refetch} =useQuery({
        queryKey:['iphones'],
        queryFn: async() => {
            try{

            const res = await fetch('http://localhost:5000/categories/iphone', {
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
            <h1>this is iphone products</h1>
            <h1>length: {iphones.length}</h1>
            <div className='grid grid-cols-3'>
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