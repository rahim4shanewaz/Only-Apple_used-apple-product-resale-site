import React, { useState } from 'react';
import ConfirmationModal from '../../components/modal/ConfirmationModal';
import verify from '../../assets/icons/icons8-approval.gif';
import toast from 'react-hot-toast';
import Loading from '../shared/loading/Loading';
import { Link } from 'react-router-dom';

const Product = ({product, handleDeleteProduct, isLoading,refetch}) => {
    const description = product.description.slice(1,200)
    const [deletingSeller, setDeletingSeller] = useState(true);

    const [buttonToggle, setButtonToggle] = useState(null)
    const closeModal = () => {
        setDeletingSeller(null);
    }


    const handleAdvertise = product =>{
    

   fetch('https://final-server-lovat.vercel.app/advertisedproduct', {
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
  fetch(`https://final-server-lovat.vercel.app/advertisedproduct/${product._id}`, {
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
          

          <div className='mb-5'>
    
    <div className="card w-11/12 lg:h bg-slate-50 glass rounded-none">
     <div className='img-h'>
     <img className='h-full w-full object-cover' src={ product.img} alt="car!"/>
     </div>
      <small>
      <div className=" p-5">
        <h2 className="card-title mb-3 text-slate-700 ">{ product.name}</h2>
        <hr />
        <div>

        {product?.booking ? 
   <h1 className='font-bold text-green-500'>This Product is Booked</h1>
     :
     <h1 className='font-bold'>This Product is on Market</h1>
     }
        </div>
    
    
        
    
        <div className='lg:flex gap-5 justify-start items-center' >
<label onClick={() => handleAdvertise(product)}  className="btn mt-3  max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Run Advertise</label>
<label onClick={() => handleDelete(product)}  className="btn mt-3  max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Off Advertising</label></div>
<label onClick={() => setDeletingSeller(product)} htmlFor="confirmation-modal" className="btn mt-3  rounded-none btn-sm outline-none border-none shadow bg-red-400">>Delete</label>


    
    
    
    
 
        <div className="">
         
        
                  
            
        </div>
      </div>  
      </small>
     
    </div>
    
                
            </div>




{/* <div>
    <div  data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='lg:flex gap-5 justify-center items-center shadow pr-10'>
        <div>
        <img  className='h-20 w-20 object-cover' src={product.img} alt="car!"/>
        </div>
       <div>
       <h2 className=" text-3xl mb-3 text-slate-700 ">{product.name}</h2>
       </div>
       <div>
       <div className='lg:flex gap-5 justify-start items-center'>
             <div>
             { product?.verify ?
                
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={verify} alt="" />
                    <p className='font-bold'>Verified seller</p>
                </div>
                :
                <div>
                    <small className='text-red-400 font-bold'><p>Not Verified seller</p></small>
                </div>
              }
             </div>
              <div>
              {product?.booking ? 
   <h1 className='font-bold text-green-500'>This Product is Booked</h1>
     :
     <h1 className='font-bold'>This Product is on Market</h1>
     }
              </div>
           </div>
       </div>




    </div>
</div> */}
{/* <div className='lg:flex gap-5 justify-start items-center' >
<label onClick={() => handleAdvertise(product)}  className="btn mt-3  max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Run Advertise</label>
<label onClick={() => handleDelete(product)}  className="btn mt-3  max-w-xs rounded-none btn-sm outline-none border-none shadow bg-slate-400">Off Advertising</label>
<label onClick={() => setDeletingSeller(product)} htmlFor="confirmation-modal" className="btn mt-3  rounded-none btn-sm outline-none border-none shadow bg-red-400">>Delete</label>

</div> */}





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