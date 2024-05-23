import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import { saveShippingAddress } from "../../actions/cartActions";
import CheckoutSteps from "../../components/cart/CheckoutSteps";
import MainLayout from "../../components/MainLayout";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <MainLayout>
      <FormContainer className="py-10 px-5">
        <CheckoutSteps step1 step2 />
        <h1 className="text-3xl mb-6 mt-8">Shipping</h1>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label className="label" htmlFor="address">
              <span className="label-text">Address</span>
            </label>
            <input
              className="input input-bordered"
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="city">
              <span className="label-text">City</span>
            </label>
            <input
              className="input input-bordered"
              id="city"
              type="text"
              placeholder="Enter your city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="postalCode">
              <span className="label-text">Postal Code</span>
            </label>
            <input
              className="input input-bordered"
              id="postalCode"
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="country">
              <span className="label-text">Country</span>
            </label>
            <input
              className="input input-bordered"
              id="country"
              type="text"
              placeholder="Enter your country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <button type="submit" className="btn w-full mt-5">
            Continue
          </button>
        </form>
      </FormContainer>
    </MainLayout>
  );
};

export default ShippingScreen;
