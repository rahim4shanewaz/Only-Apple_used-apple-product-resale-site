import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextApi';
import Loading from '../../shared/loading/Loading';

const BookingModalAccessories = ({booking, isLoading, setBooking,refetch}) => {

    const { user, loading, dbUser } = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
       
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location= form.location.value;

        const bookingData ={
            name: name,
            email: email,
            phone: phone,
            booking: 'yes',
            location: location
        }




        const   bookingByUser = {
            user: dbUser._id,
            product: booking.name,
            img: booking.img
         }
    
    
         fetch('https://final-server-lovat.vercel.app/bookingByUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingByUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })


           fetch(`https://final-server-lovat.vercel.app/product/booking/${booking._id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                console.log(data)
                toast.success('Product Booking Completed')
                refetch();
            }
        })
    
    







        console.log(booking._id)
        setBooking(null)
        if (isLoading) {
            return <Loading></Loading>
        }
    
    }






    return (
        <div>
          
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box rounded-none p-10 relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className=" text-3xl font-bold">{booking.name}</h3>
    <h3 className="text-lg font-bold">Price: ${booking.selling_price}</h3>
    
   
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                     
                        
                        <input name="name" type="text" defaultValue={dbUser?.name} disabled placeholder="Your Name" className="input w-full input-bordered rounded-none" />
                        <input name="email" type="email" defaultValue={dbUser?.email} disabled placeholder="Email Address" className="input w-full rounded-none input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input rounded-none w-full input-bordered" />
                        <select name='location' className="select select-bordered rounded-none w-full max-w-xs">
                            <option disabled selected>Location</option>
                            <option value='Dhaka'>Dhaka</option>
                            <option value='Khulna'>Khulna</option>
                            <option value='Barishal'>Barishal</option>
                            <option value='Jessore'>Jessore</option>
                            <option value='Chittagong'>Chittagong</option>
                            </select>
                        <br />
                        <input className='btn rounded-none text-white bg-slate-400 border-none btn-accent w-full' type="submit" value="Booking Confirm" />
                       
                    </form>
  </div>
</div>
            
        </div>
    );
};

export default BookingModalAccessories;