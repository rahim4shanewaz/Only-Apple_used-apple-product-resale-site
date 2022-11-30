import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useHooks from '../../components/useTitles';
import { AuthContext } from '../../Context/ContextApi';
import useToken from '../../hooks/useToken';



const Register = () => {
    useHooks('Add Product')
    const { user, loading, dbUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [imageData, setImageData] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    

    if(token){
       
        navigate('/dashboard/sellers/allproducts');
        
    }



    const handleSignUp = (data) => {
          
            const image = data.image[0];
            const formData = new FormData();
            formData.append('image', image);
            const url = 'https://api.imgbb.com/1/upload?key=7cccad9c55fe0d936830ccdbb5d17f1b'
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imgData => {
               
                
                const product = {
                    id: dbUser._id,
                    name: data.name,
                    condition: data.condition,
                    location: data.location,
                    category: data.category,
                    email: data.email,
                    purchase_year: data.purchase_year,
                    use_year: data.use_year,
                    img: imgData.data.url,
                    original_price: data.original_price,
                    selling_price: data.selling_price,
                    number: data.number,
                    description:data.descriptions,
                    verify: dbUser.verify,
                    seller_email:user.email,
                    time:  new Date()
                }
                console.log(product)
                saveUser(product);
               
    
            })
        
           
    }





    const saveUser = (product) =>{
        
        
       
        fetch('https://final-server-lovat.vercel.app/addedproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success(`product is added successfully`);
            setCreatedUserEmail(product.seller_email);
           
        })
    }
    
    

    return (
        <div className='  mt-20'>
        <div className='w-full p-7 '>
            <h2 className='text-4xl mb-10 font-bold text-center'>Add Product</h2>
         
           <div className='flex mt-10   justify-center'>
          
           <form className='shadow-xl p-16 bg-slate-50' onSubmit={handleSubmit(handleSignUp)}>



 
           <div className="form-control  ">
     <label className="label"> <span className="label-text font-bold ">Product Name</span></label>
     <input type="text" {...register("name", {
         required: "Name is Required"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
 </div>
<div className='flex gap-5'>



 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Product selling Price</span></label>
     <input type="text" {...register("selling_price", {
         required: "Price is Required"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.selling_price && <p className='text-red-500'>{errors.selling_price.message}</p>}
 </div>
 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Product original Price</span></label>
     <input type="text" {...register("original_price", {
         required: "Price is Required"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.original_price && <p className='text-red-500'>{errors.original_price.message}</p>}
 </div>
</div>








 <div className='flex gap-5'>

 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Condition Type</span></label>
     <select 
     {...register('condition')}
     className="select rounded-none shadow-xl font-bold  select-bordered w-full max-w-xs">
         <option disabled selected>What is Condition</option>
         <option>Excellent</option>
         <option>Good</option>
         <option>Fair</option>
     </select>
 </div>
 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Category</span></label>
     <select 
     {...register('category')}
     className="select rounded-none shadow-xl select-bordered w-full max-w-xs">
         <option disabled selected>What is category</option>
         <option>macBook</option>
         <option>iphone</option>
         <option>accessories</option>
     </select>
 </div>
 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Location</span></label>
     <select 
     {...register('location')}
     className="select rounded-none shadow-xl select-bordered w-full font-bold  max-w-xs">
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
     <label className="label"> <span className="label-text font-bold ">Product purchase  year</span></label>
     <input type="text" {...register("purchase_year", {
         required: "year is Required"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.purchase_year && <p className='text-red-500'>{errors.purchase_year.message}</p>}
 </div>
 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Product years of use</span></label>
     <input type="text" {...register("use_year", {
         required: "year is Required"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.use_year && <p className='text-red-500'>{errors.use_year.message}</p>}
 </div>
 </div>



 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Product Descriptions</span></label>
     <textarea  type="text" {...register("descriptions", {
         required: "Descriptions"
     })} className="input rounded-none shadow-xl input-bordered w-full h-28" />
     {errors.descriptions && <p className='text-red-500'>{errors.descriptions.message}</p>}
 </div>











<div className='flex gap-5'>
 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Mobile Number</span></label>
     <input type="text" {...register("number", {
         required: "Mobile Number"
     })} className="input rounded-none shadow-xl input-bordered w-full max-w-xs" />
     {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
 </div>

 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Email</span></label>
     <input value={user.email} type="email" {...register("email", {
         required: true
     })} className="input rounded-none input-bordered w-full max-w-xs" />
     {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
 </div>
 </div>

 <div className="form-control w-full max-w-xs">
     <label className="label"> <span className="label-text font-bold ">Photo</span></label>
     <input type="file" {...register("image", {
         required: "Photo is Required"
     })} className=" w-full max-w-xs" />
     {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
 </div>








 <input className='btn rounded-none  btn-accent bg-slate-400 text-white border-none w-full mt-4' value="Add Your Product" type="submit" />
 {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
           </div>

           

        </div>
    </div>
    );
    
};

export default Register;

