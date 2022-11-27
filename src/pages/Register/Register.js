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

       


        
                

        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });




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
                console.log(imgData.data.url)
                saveUser(data.name, data.email, data.role, imgData.data.url );
    
            })
           
    }







    const handleGoogleSignIn = () =>{
        const role = 'buyer'
        signInWithGoogle()
        .then(result => {
            const user = result.user;
           console.log(user, user.displayName, user.email);
           
          
            saveUser( user.displayName,  user.email, role);
         
           toast('User Created Successfully.')
        })
        .catch( error => {
            console.error(error);
        })
    
    }
    



    const saveUser = (name, email, role, img) =>{
        const user ={name, email, role, img};
        
       
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCreatedUserEmail(email);
        })
    }
    
















    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>





                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Role</span></label>
                    <select 
                    {...register('role')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>What is Purpose</option>
                        <option>buyer</option>
                        <option>seller</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className=" w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>







                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        // minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

        </div>
    </div>
    );
    
};

export default Register;