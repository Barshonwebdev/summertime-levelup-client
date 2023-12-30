import useSelected from "../../../hooks/useSelected";

const Payment = () => {
     const [selectedClasses] = useSelected();
     const totalPrice = selectedClasses.reduce(
       (sum, item) => item.price + sum,
       0
     );
    return (
      <div>
        <p className="text-center text-3xl text-orange-600 italic my-3">Payment</p>
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
      </div>
    );
};

export default Payment;