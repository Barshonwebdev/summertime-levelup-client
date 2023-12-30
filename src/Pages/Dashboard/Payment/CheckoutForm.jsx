import { Button } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({totalPrice}) => {
    const [cardError,setCardError]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    console.log(totalPrice);
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
              disabled={!stripe}
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