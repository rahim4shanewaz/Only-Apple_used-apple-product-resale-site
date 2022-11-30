import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseProducts from './AdvertiseProducts';
import dot from '../../assets/icons/icons8-dots-loading.gif';
import Loading from '../../pages/shared/loading/Loading';


const AdvertiseSection = () => {
    

    const {data: products = [], isLoading, refetch} =useQuery({
        queryKey:['products'],
        queryFn: async() => {
            try{
                const res = await fetch('https://final-server-lovat.vercel.app/advertise');
                const data = await res.json();
                return data;
               
            }
            catch (error) {

            }
            refetch()
           
        }
    })




    if (isLoading) {
      
        return <Loading></Loading>
    }

    return (
        <div className='m-10 shadow-xl p-5'>
            <div className='flex justify-center'>
                <img className='h-10 w-10' src={dot} alt="" />
                <img className='h-10 w-10' src={dot} alt="" />
                </div>
      
        <div data-aos="fade-up" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='lg:grid lg:grid-cols-3 gap-2'>
        {
            products.map(product => <AdvertiseProducts
                key={product._id}
                product={product}
                refetch={refetch}
                
               
               >

                </AdvertiseProducts>)
        }
      </div>
     
        
    </div>
    );
};

export default AdvertiseSection;