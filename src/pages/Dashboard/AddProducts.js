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
        console.log(data.use_year)

       


      
                

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

                <div className='flex gap-5'>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product purchase  year</span></label>
                    <input type="text" {...register("purchase_year", {
                        required: "year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchase_year && <p className='text-red-500'>{errors.purchase_year.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product years of use</span></label>
                    <input type="text" {...register("use_year", {
                        required: "year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.use_year && <p className='text-red-500'>{errors.use_year.message}</p>}
                </div>
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










const date = [
    {
      
      "name": "Air Pod",
      "condition": "Good",
      "location": "Barishal",
      "category": "Accessories",
      "email": "jon@g.com",
      "purchase_year": 2018,
      "use_year": 3,
      "img": "https://i.ibb.co/37scWzq/download.jpg",
      "original_price": 300,
      "selling_price": 150,
      "number": 19000000000,
      "description": "The most powerful Mac lineup ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display.The most powerful Mac lineup ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display."
    },
    {
      
      "name": "iphone Charger",
      "condition": "Excellent",
      "location": "Dhaka",
      "category": "Accessories",
      "email": "jabir@ya.com",
      "purchase_year": 2020,
      "use_year": 1,
      "img": "https://i.ibb.co/fHt1pQp/images-2.jpg",
      "original_price": 180,
      "selling_price": 80,
      "number": 19000000000,
      "description": "The most powerful Mac lineup ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display.The most powerful Mac lineup ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display.."
    }
  ]