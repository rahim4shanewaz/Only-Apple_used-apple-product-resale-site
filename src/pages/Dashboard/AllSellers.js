import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const {data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/allseller');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
        <h1>this is all seller ffffffffffff sections</h1>
        <div className='p-10 m-10'>
        {
            sellers.map(seller => <div
                key={seller._id}
                >
                    <div className='flex gap-5'>
                    <h1 className='text-center text-green-500'>{seller.name}</h1>
                    <h1 className='text-center text-red-500'>{seller.email}</h1>
                    <h1 className='text-center'>{seller.role}</h1>
                    </div>

            </div>)
        }
        </div>
        
    </div>
    );
};

export default AllSellers;