import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyres = () => {

    const {data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            try{
                const res = await fetch('http://localhost:5000/users/allbuyer', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){
                
            }
           
           
        }
    });
    return (
        <div>
            <h1>this is all buyers sections</h1>
            <div className='p-10 m-10'>
            {
                buyers.map(buyer => <div
                    key={buyer._id}
                    >
                        <div className='flex gap-5 items-center shadow mt-2 bg-slate-100'>
                        <div className="avatar m-3">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={buyer.img}  alt="" />
                            </div>
                            </div>
                           
                        <h1 className='text-center text-green-500'>{buyer.name}</h1>
                        <h1 className='text-center text-red-500'>{buyer.email}</h1>
                        <h1 className='text-center'>{buyer.role}</h1>
                        <button className="btn btn-outline btn-accent">Verify</button>
                        <button className="btn btn-outline btn-error">Delete</button>
                        </div>

                </div>)
            }
            </div>
            
        </div>
    );
};

export default AllBuyres;