import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalAccessories from './bookingModal/BookingModalAccessories';
import ProductAccessory from './ProductAccessory';
import accessory from '../../assets/icons/icons8-box.gif';

const AccessoriesProducts = () => {
    const [booking, setBooking] = useState(null)


    const {data: accessories = [], isLoading, refetch} =useQuery({
        queryKey:['accessories'],
        queryFn: async() => {
            try{
                const res = await fetch('https://final-server-lovat.vercel.app/categories/accessories',{
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
                    <h1 className='text-xl text-slate-500 font-bold'>ACCESSORIES</h1>
                    <div className="divider divider-horizontal"></div>
                    <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={accessory} alt="" />
                    
                    </div>
            <div className='grid lg:grid-cols-2 mt-28'>
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