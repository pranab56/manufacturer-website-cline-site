import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Page/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise =loadStripe('pk_test_51L3Ou8C3WzdUW5RgIQSy5VfeJFAkZv2csgDEFm8pQtepA7XryPMextbW2ydiHfhGGPUBVqIXncyxQrzZ0562q1jx003HV4xB0H')
const Payment = () => {
  const { id } = useParams();
  const { isLoading, error, data:order } = useQuery(("payment", id), () =>
    fetch(`https://protected-headland-11600.herokuapp.com/order/${id}`,{
        method:'GET',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  
  return (
    <div className="flex align-middle justify-center">
      <div className="w-2/6">
   
   <div class="card bg-base-100 shadow-2xl my-10">
     <div class="card-body">
       <h2 class="card-title">Pay for {order.ProductName}</h2>
       <p>Total Quantity : ${order.quantity} and price : ${order.price}</p>
       <p>Total Price : ${order.quantity * order.price}</p>
      
     </div>
   </div>
   <div class="card px-4 py-4 shadow-2xl bg-base-100">
   <Elements stripe={stripePromise}>
    <CheckoutForm order={order}/>
  </Elements>
    </div>
    
            

          
          </div>
        </div>
   
  );
};

export default Payment;
