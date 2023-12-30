import { Button } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe=useStripe();
    const elements=useElements();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }

         const card = elements.getElement(CardElement);

         if (card === null) {
           return;
         }
    }
    
    return (
      <div className="">
        <form className="" onSubmit={handleSubmit}>
          <CardElement
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
        </form>
      </div>
    );
};

export default CheckoutForm;