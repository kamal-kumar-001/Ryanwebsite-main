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

  const [name, setName] = useState(shippingAddress.name || "");
  const [phone, setPhone] = useState(shippingAddress.phone || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ name, phone, address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <MainLayout>
      <FormContainer className="py-10 px-5">
        <CheckoutSteps step1 step2 />
        <h1 className="text-3xl mb-6 mt-8">Shipping</h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="name">
              <span className="text-[#5a7184] font-semibold block">Name</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="phone">
              <span className="text-[#5a7184] font-semibold block">Phone</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="address">
              <span className="text-[#5a7184] font-semibold block">Address</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="city">
              <span className="text-[#5a7184] font-semibold block">City</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              id="city"
              type="text"
              placeholder="Enter your city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="postalCode">
              <span className="text-[#5a7184] font-semibold block">Postal Code</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              id="postalCode"
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label className="label" htmlFor="country">
              <span className="text-[#5a7184] font-semibold block">Country</span>
            </label>
            <input
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
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
