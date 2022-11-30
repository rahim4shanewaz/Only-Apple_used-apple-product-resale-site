import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextApi';
import BookingModal from './bookingModal/BookingModal';
import ProductMacBook from './ProductMacBook';
import mac from '../../assets/icons/icons8-checked-laptop.gif';

const MacBookProducts = () => {

    const [booking, setBooking] = useState(null)
   
    const {data: macBooks = [], isLoading, refetch} =useQuery({
        queryKey:['macBooks'],
        queryFn: async() => {
            try{
            const res = await fetch('https://final-server-lovat.vercel.app/categories/macBook', {
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
                    <h1 className='text-xl text-slate-500 font-bold'>MACBOOK</h1>
                    <div className="divider divider-horizontal"></div>
                    <img  data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='w-10 h-10' src={mac} alt="" />
                    
                    </div>
          <div  className='grid lg:grid-cols-2 mt-28'>
          {
                macBooks.map(macBook => <ProductMacBook 
                    key={macBook._id}
                    macBook={macBook}
                    setBooking={setBooking}
                    refetch={refetch}>

                    </ProductMacBook>)
            }
          </div>

          
           {booking &&
             <BookingModal
             booking={booking}
             setBooking={setBooking}
             refetch={refetch}
             isLoading={isLoading}></BookingModal>
           }
          


        </div>
    );
};

export default MacBookProducts;