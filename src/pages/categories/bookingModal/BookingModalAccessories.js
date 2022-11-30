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


           fetch(`http://localhost:5000/product/booking/${booking._id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                console.log(data)
                toast.success('Product Book Completed')
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
            {/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{booking.name}</h3>
    <h3 className="text-lg font-bold">{dbUser.name}</h3>
    <h3 className="text-lg font-bold">{dbUser.email}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                     
                        
                        <input name="name" type="text" defaultValue={dbUser?.name} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={dbUser?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <select name='location' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Location</option>
                            <option value='Dhaka'>Dhaka</option>
                            <option value='Khulna'>Khulna</option>
                            <option value='Barishal'>Barishal</option>
                            <option value='Jessore'>Jessore</option>
                            <option value='Chittagong'>Chittagong</option>
                            </select>
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                       
                    </form>
  </div>
</div>
            
        </div>
    );
};

export default BookingModalAccessories;