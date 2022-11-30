import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextApi';
import BookingModal from './bookingModal/BookingModal';
import ProductMacBook from './ProductMacBook';

const MacBookProducts = () => {

    const [booking, setBooking] = useState(null)
   
    const {data: macBooks = [], isLoading, refetch} =useQuery({
        queryKey:['macBooks'],
        queryFn: async() => {
            try{
            const res = await fetch('http://localhost:5000/categories/macBook', {
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
            <h1>this is All MackBook products</h1>
            <h1>length: {macBooks.length}</h1>
          <div className='grid grid-cols-3'>
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