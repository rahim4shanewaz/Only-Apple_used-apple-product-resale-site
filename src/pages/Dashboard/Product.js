import React, { useState } from 'react';
import ConfirmationModal from '../../components/modal/ConfirmationModal';
import verify from '../../assets/icons/icons8-approval.gif';
import toast from 'react-hot-toast';
import Loading from '../shared/loading/Loading';

const Product = ({product, handleDeleteProduct, isLoading,refetch}) => {
    const [deletingSeller, setDeletingSeller] = useState(true);

    const [buttonToggle, setButtonToggle] = useState(null)
    const closeModal = () => {
        setDeletingSeller(null);
    }


    const handleAdvertise = product =>{
    

   fetch('http://localhost:5000/advertisedproduct', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(product)
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    refetch();
   
    toast.success(`Product Advertising successfully`);
    
   
})






   if (isLoading) {
       return <Loading></Loading>
   }

}
const handleDelete = product => {
  fetch(`http://localhost:5000/advertisedproduct/${product._id}`, {
      method: 'DELETE', 
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json())
  .then(data => {
      if(data.deletedCount > 0){
        console.log(data)
          refetch();
       
          toast.success(`Product Advertising Off Successful`)

         
      }
  })
}

    return (
        <div>
            <div className="card card-compact rounded-none bg-base-100 shadow-xl">
  <figure><img className='w-full h-60 object-cover' src={product.img} alt="Shoes" /></figure>
  
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <div className='flex gap-1 items-center'>
            {/* <h2>{product.verify} </h2> */}
            <div>
              { product?.verify ?
                
                <div className='flex gap-2 items-center'>
                    <img className='w-4 h-4' src={verify} alt="" />
                    <p>Verified seller</p>
                </div>
                :
                <div>
                    <small className='text-red-400 font-bold'><p>Not Verified seller</p></small>
                </div>
              }
              {product?.booking ? 
   <h1>this product is booked</h1>
     :
     <h1>this product is on market</h1>
     }
      {product?.advertise ? 
   <h1>this product is run advertise</h1>
     :
     <h1>this product is not run advertise</h1>
     }
                
               
            </div>
           
            </div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     

    
    
   <div className='flex flex-col gap-4'>
   <label onClick={() => setDeletingSeller(product)} htmlFor="confirmation-modal" className="btn rounded-none btn-primary">Delete</label>

<label onClick={() => handleAdvertise(product)}  className="btn rounded-none btn-primary">Run Advertise</label>
<label onClick={() => handleDelete(product)}  className="btn rounded-none btn-primary">Off Advertising</label>
   </div>
    
    

       

       
    
     




    </div>
  </div>
</div>
{
             deletingSeller && <ConfirmationModal
             title={`Are you sure you want to delete?`}
             message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
             successAction = {handleDeleteProduct}
             successButtonName="Delete"
             modalData = {deletingSeller}
             closeModal = {closeModal}
         >
         </ConfirmationModal>
        }
            
        </div>
    );
};

export default Product;