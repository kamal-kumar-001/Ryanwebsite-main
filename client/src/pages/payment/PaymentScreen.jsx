import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

// import Cart from "../../components/cart/Cart";
// import UserProfileButton from "../../components/UserProfileButton";
// import Header from "../../layouts/Header";
// import Layout from "../../layouts/Layout";
import FormContainer from "../../components/FormContainer";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutSteps from "../../components/cart/CheckoutSteps";
import MainLayout from "../../components/MainLayout";
import COD from "../product/container/COD";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod: paymentMethodState } = cart;

  const [paymentMethod, setPaymentMethod] = useState(
    paymentMethodState ? paymentMethodState : "Online Payment"
  );

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/payment");
    }
  }, [navigate, shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <MainLayout>
      {/* <Header className="justify-end">
        <div className="flex items-center divide-x divide-gray-200 border-x border-b border-gray-200">
          <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
          <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
        </div>
      </Header> */}
      <FormContainer className="py-10 px-5">
        <CheckoutSteps step1 step2 step3 />
        <h1 className="text-3xl mb-6 mt-8">Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              disabled={true}
              onClick={() => setPaymentMethod("Cash")}
              className={`border ${
                paymentMethod === "Cash"
                  ? "border-blue-500 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                  : "border-gray-800"
              } rounded-sm flex flex-col gap-y-2 justify-center items-center p-5 relative disabled:cursor-not-allowed`}
            >
              {paymentMethod === "Cash" && (
                <AiFillCheckCircle className="absolute right-[10px] top-[8%] text-blue-500" />
              )}
              <COD className="h-10 w-auto" />
              <span className="text-gray-600">Cash on Delivery </span>
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("Online Payment")}
              className={`border ${
                paymentMethod === "Online Payment"
                  ? "border-blue-500 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                  : "border-gray-800"
              } rounded-sm flex flex-col gap-y-2 justify-center items-center p-5 relative`}
            >
              {paymentMethod === "Online Payment" && (
                <AiFillCheckCircle className="absolute right-[10px] top-[8%] text-blue-500" />
              )}
              <AiFillDollarCircle className="h-10 w-auto" />
              <span className="text-gray-600">Online Payment</span>
            </button>
          </div>
          <button type="submit" className="btn w-full mt-5">
            Continue
          </button>
        </form>
      </FormContainer>
    </MainLayout>
  );
};

export default PaymentScreen;
