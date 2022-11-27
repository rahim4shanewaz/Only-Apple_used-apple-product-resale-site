import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextApi';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [imageData, setImageData] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

  
   
   

    if(token){
       
        navigate('/');
    }



    const handleSignUp = (data) => {
        

        setSignUPError('');
        console.log(data.name)
        console.log(data.selling_price)
        console.log(data.original_price)
        console.log(data.number)
        console.log(data.location)
        console.log(data.condition)
        console.log(data.email)
        console.log(data.category)
        console.log(data.descriptions)
        console.log(data.year)

       


      
                

            // const image = data.image[0];
            // const formData = new FormData();
            // formData.append('image', image);
            // const url = 'https://api.imgbb.com/1/upload?key=7cccad9c55fe0d936830ccdbb5d17f1b'
            // fetch(url, {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(res => res.json())
            // .then(imgData => {
               
            //     console.log(imgData.data.url)
               
    
            // })
           
    }







   
    



    // const saveUser = (name, email, role, img) =>{
    //     const user ={name, email, role, img};
        
       
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setCreatedUserEmail(email);
    //     })
    // }
    
















    return (
        <div className=' flex justify-center items-center'>
        <div className='w-full p-7'>
            <h2 className='text-xl text-center'>Add Product</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>





               <div className='flex gap-5'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product selling Price</span></label>
                    <input type="text" {...register("selling_price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.selling_price && <p className='text-red-500'>{errors.selling_price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product original Price</span></label>
                    <input type="text" {...register("original_price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.original_price && <p className='text-red-500'>{errors.original_price.message}</p>}
                </div>
               </div>








                <div className='flex gap-5'>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type</span></label>
                    <select 
                    {...register('condition')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>What is Condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('category')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>What is category</option>
                        <option>MacBook</option>
                        <option>Headphone</option>
                        <option>Tablet</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <select 
                    {...register('location')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>What is products location</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Khulna</option>
                        <option>Rajshahi</option>
                        <option>Barisal</option>
                    </select>
                </div>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product purchase  year</span></label>
                    <input type="text" {...register("year", {
                        required: "year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Descriptions</span></label>
                    <textarea  type="text" {...register("descriptions", {
                        required: "Descriptions"
                    })} className="input input-bordered w-full h-28" />
                    {errors.descriptions && <p className='text-red-500'>{errors.descriptions.message}</p>}
                </div>

              









              <div className='flex gap-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="text" {...register("number", {
                        required: "Mobile Number"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className=" w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>







              
                <input className='btn btn-accent w-full mt-4' value="Add Your Product" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            {/* <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div> */}
            {/* <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}

        </div>
    </div>
    );
    
};

export default Register;