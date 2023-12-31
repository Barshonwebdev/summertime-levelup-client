import { Button } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useSelected from "../../../hooks/useSelected";
import Swal from "sweetalert2";

const CheckoutForm = ({totalPrice}) => {
    
    const {user}=useAuth();
    const [selectedClassesCart]=useSelected();
    const stripe=useStripe();
    const elements=useElements();
    console.log(totalPrice);
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
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

         setProcessing(true);
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
      if(paymentIntent.status==='succeeded'){
        setTransactionId(paymentIntent.id);
        console.log(transactionId);
        const payment={
          email:user?.email,
          transactionId:paymentIntent.id,
          totalPrice,
          quantity:selectedClassesCart.length,
          itemsName:selectedClassesCart.map(item=>item.className),
          selectedItemId:selectedClassesCart.map(item=>item._id),
          classId:selectedClassesCart.map(item=>item.classId),
        };

        axios.post('http://localhost:5000/payment',payment)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Successful!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      }
        
      setProcessing(false);
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
              disabled={!stripe || !clientSecret || processing}
            >
              Pay
            </Button>
          </div>
          {cardError && (
            <p className="text-red-600 mt-2 text-center">{cardError}</p>
          )}
          {transactionId && <p className="text-green-600 mt-2 text-center">Payment Successful. ID: {transactionId}</p>}
        </form>
      </div>
    );
};

export default CheckoutForm;