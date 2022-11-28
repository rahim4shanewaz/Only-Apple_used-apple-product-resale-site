import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const {data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{

            try{
                const res = await fetch('http://localhost:5000/users/allseller',{
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
        <h1>this is all seller  sections</h1>
        <div className='p-10 m-10'>
        {
            sellers.map(seller => <div
                key={seller._id}
                >
                    <div className='flex gap-5 items-center shadow mt-2 bg-slate-100'>
                    <div className="avatar m-3">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={seller.img}  alt="" />
                            </div>
                            </div>
                    <h1 className='text-center text-green-500'>{seller.name}</h1>
                    <h1 className='text-center text-red-500'>{seller.email}</h1>
                    <h1 className='text-center'>{seller.role}</h1>
                  
                        <button className="btn btn-outline btn-error">Delete</button>
                    </div>

            </div>)
        }
        </div>
        
    </div>
    );
};

export default AllSellers;