import React from 'react';

const DeleteModal = ({deleteOrder,setDeleteOrder}) => {
    const {email}=deleteOrder;
    const handleDeleteButton=()=>{
        fetch(`http://localhost:5000/order/${email}`,{
            method:'DELETE',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                setDeleteOrder(null)
               
            }
            
        })
        deleteOrder("")
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
<div class="modal w-full modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg"> Are you sure you want to <span className='text-red-500'>DELETE</span></h3>
    <p class="py-4">Once deleted you will not be able to return !!</p>
    <div class="flex justify-around mt-10">
    <button onClick={()=>handleDeleteButton()} class="btn btn">DELETE ORDER</button>
       
      <label for="delete-modal" class="btn">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteModal;