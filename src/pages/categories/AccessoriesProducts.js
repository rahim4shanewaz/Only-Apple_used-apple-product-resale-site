import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalAccessories from './bookingModal/BookingModalAccessories';
import ProductAccessory from './ProductAccessory';

const AccessoriesProducts = () => {
    const [booking, setBooking] = useState(null)


    const {data: accessories = [], isLoading, refetch} =useQuery({
        queryKey:['accessories'],
        queryFn: async() => {
            try{
                const res = await fetch('http://localhost:5000/categories/accessories',{
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
            <h1>this is Accessories products </h1>
            <div className='grid grid-cols-3'>
            {
                accessories.map(accessory => <ProductAccessory 
                    key={accessory._id}
                    accessory={accessory}
                    setBooking={setBooking}
                    refetch={refetch}>

                    </ProductAccessory>)
            }
          </div>
          {booking &&
             <BookingModalAccessories
             booking={booking}
             setBooking={setBooking}
             refetch={refetch}
             isLoading={isLoading}></BookingModalAccessories>
           }
            
        </div>
    );
};

export default AccessoriesProducts;