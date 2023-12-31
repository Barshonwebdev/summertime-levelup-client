import { loadStripe } from "@stripe/stripe-js";
import useSelected from "../../../hooks/useSelected";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";


const Payment = () => {
     const [selectedClasses] = useSelected();
      
     const totalPrice = selectedClasses.reduce(
       (sum, item) => item.price + sum,
       0
     );

     const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PK);
    return (
      <div>
        <p className="text-center text-3xl text-orange-600 italic my-3">
          Payment
        </p>
        <div className="text-center  text-xl">
          <h3>
            Total Classes selected:{" "}
            <span className="text-2xl text-violet-600">
              {selectedClasses.length}
            </span>{" "}
          </h3>
          <h3>
            Total Price:{" "}
            <span className="text-green-700 text-2xl">
              ${parseFloat(totalPrice.toFixed(2))}
            </span>{" "}
          </h3>
        </div>
        <div className="my-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
          </Elements>
        </div>
        <div className="my-5">
          <div className="flex justify-center">
            <Link to="/dashboard/selected">
              <Button colorScheme="linkedin">Back to selected classes</Button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Payment;