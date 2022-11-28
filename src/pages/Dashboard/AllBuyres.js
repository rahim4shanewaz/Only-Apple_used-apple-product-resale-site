import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyres = () => {

    const {data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/allbuyer');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h1>this is all buyers ffffffffffff sections</h1>
            <div className='p-10 m-10'>
            {
                buyers.map(buyer => <div
                    key={buyer._id}
                    >
                        <div className='flex gap-5'>
                        <h1 className='text-center text-green-500'>{buyer.name}</h1>
                        <h1 className='text-center text-red-500'>{buyer.email}</h1>
                        <h1 className='text-center'>{buyer.role}</h1>
                        </div>

                </div>)
            }
            </div>
            
        </div>
    );
};

export default AllBuyres;