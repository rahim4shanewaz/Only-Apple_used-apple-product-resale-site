import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModalAccessories from './bookingModal/BookingModalAccessories';
import ProductAccessory from './ProductAccessory';
import accessory from '../../assets/icons/icons8-box.gif';
import { Link } from 'react-router-dom';
import useHooks from '../../components/useTitles';

const AccessoriesProducts = () => {
    useHooks('Accessories')
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
                   <div>
                   <h1 className='text-xl text-slate-500 font-bold'>CATEGORY</h1>
                   <small className='flex font-bold gap-2'> <Link to={'/category/macbook'}> <small> <button className='hover:px-2 hover:py-1 hover:bg-slate-400 bg-slate-200 px-1' >MACKBOOK</button></small> </Link> 
                   <Link to={'/category/iphone'}> <small> <button className='hover:px-2 hover:py-1 hover:bg-slate-400 bg-slate-200 px-1' >IPHONE</button></small> </Link> 
                   
                    </small>
                   </div>


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