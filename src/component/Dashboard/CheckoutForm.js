import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe=useStripe();
    const elements=useElements();
  const [curdError,setCurdError]=useState('');
  const [processing,setProcessing]=useState(false);
  const [Successs,setSuccess]=useState('');
  const [transactionId,setTransactionId]=useState('');
  const [clientSecret,setClientSecret]=useState('');

  const {_id,price,email,name}=order;
  

  useEffect(()=>{
    fetch('http://localhost:5000/createPaymentIntent',{
      method:'POST',
      headers:{
        'content type': 'application/json',
        'authorization':`bearer ${localStorage.getItem('accessToken')}`
        
    },
    body:JSON.stringify({price})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.clientSecret){
        setClientSecret(data.clientSecret)
      }
    }); 
  },[price])
    const handleSubmit=async (event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    
      setCurdError(error?.message || "")
      setSuccess('')
      setProcessing(true)
      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:email
            },
          },
        },
      );
   if(intentError){
     setCurdError(intentError?.message)
     setProcessing(false);
     
   }
   else{
     setCurdError('');
     setTransactionId(paymentIntent.id)
     console.log(paymentIntent);
     setSuccess('congrats ! your payment is succuss')

     const payment={
       order:_id,
       transactionId:paymentIntent.id

     }
    //  
    fetch(`http://localhost:5000/order/${_id}`,{
      method:'PATCH',
      headers:{
        'content type': 'application/json',
        'authorization':`bearer ${localStorage.getItem('accessToken')}`
        
    },
    body:JSON.stringify(payment)
    }).then(res=>res.json())
    .then(data=>{
      setProcessing(false)
      console.log(data);
    })
   }

    }
    return (
        <div>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-xs btn-success' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
      curdError && <p className='text-red-500'>{curdError}</p>
    }
    {
      Successs && <div className='text-green-500'>
        <p>{Successs}</p>
        <p>your transaction Id : <span className='text-orange-500 font-bold'>{transactionId}</span></p>
        </div>
    }
        </div>
    );
};

export default CheckoutForm;