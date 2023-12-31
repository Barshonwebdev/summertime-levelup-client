import { Button } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({totalPrice}) => {
    
    const {user}=useAuth();
    const stripe=useStripe();
    const elements=useElements();
    console.log(totalPrice);
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    useEffect(()=>{
      axios.post(`http://localhost:5000/paymentIntent`,{totalPrice})
      .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    },[])
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        
         const card = elements.getElement(CardElement);

         if (card === null) {
           return;
         }

         const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
         });

         if(error){
            console.log(error);
            setCardError(error.message);
         }

         else{
            console.log('payment method', paymentMethod);
            setCardError('');
         }

         const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
           clientSecret,
           {
             payment_method: {
               card: card,
               billing_details: {
                 email:user?.email || 'Unknown',
                 name:user?.displayName || 'Anonymous',
               },
             },
           },
         );
        
        if(confirmError){
        console.log(confirmError);
        
        }

     
      console.log(paymentIntent)
      
        
         
    }
    
    return (
      <div className="">
        <form className="" onSubmit={handleSubmit}>
          <CardElement
            className=" w-96"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="flex justify-center">
            <Button
              className="mt-4"
              colorScheme="green"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </Button>
          </div>
          <p className="text-red-600 mt-2 text-center">{cardError}</p>
        </form>
      </div>
    );
};

export default CheckoutForm;