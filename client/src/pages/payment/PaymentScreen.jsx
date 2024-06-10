import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
// import { FaBitcoin } from "react-icons/fa";

// import Cart from "../../components/cart/Cart";
// import UserProfileButton from "../../components/UserProfileButton";
// import Header from "../../layouts/Header";
// import Layout from "../../layouts/Layout";
import FormContainer from "../../components/FormContainer";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutSteps from "../../components/cart/CheckoutSteps";
import MainLayout from "../../components/MainLayout";

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
              className={`border ${paymentMethod === "Cash"
                  ? "border-blue-500 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                  : "border-gray-800"
                } rounded-sm flex flex-col gap-y-2 justify-center items-center p-5 relative disabled:cursor-not-allowed`}
            >
              {paymentMethod === "Cash" && (
                <AiFillCheckCircle className="absolute right-[10px] top-[8%] text-blue-500" />
                

              )}
              {/* <AiFillDollarCircle className="h-10 w-auto" /> */}
              <svg className="h-10 w-auto" version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="300.000000pt" height="307.000000pt" viewBox="0 0 300.000000 307.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,307.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1804 2903 c-55 -65 -237 -282 -404 -483 -167 -201 -310 -373 -318
-382 -12 -15 -10 -19 28 -38 23 -12 46 -18 50 -13 17 18 563 668 581 691 18
24 20 24 53 8 71 -33 153 -16 223 47 l39 36 98 -80 c54 -44 119 -97 143 -118
l45 -38 -25 -36 c-52 -77 -56 -178 -8 -238 l19 -24 -330 -395 c-181 -217 -335
-403 -342 -412 -12 -17 -15 -16 -51 2 -59 30 -145 12 -221 -46 l-45 -35 -93
78 c-92 76 -96 78 -250 129 -86 29 -156 49 -156 44 0 -5 4 -10 9 -12 5 -1 131
-104 280 -227 348 -288 334 -278 365 -258 24 16 176 194 676 792 129 154 272
324 318 379 102 120 134 169 127 187 -7 14 -62 62 -393 335 -269 221 -272 224
-297 224 -15 0 -50 -34 -121 -117z m238 -11 c51 -43 156 -129 233 -192 198
-161 285 -239 285 -257 0 -24 -29 -61 -258 -329 -112 -130 -58 -66 -453 -539
-180 -214 -338 -401 -352 -414 -25 -22 -28 -23 -51 -8 -23 15 -224 180 -330
270 -27 23 -54 45 -60 49 -6 4 -7 10 -4 13 14 15 82 -20 155 -79 125 -101 130
-102 204 -51 70 48 114 54 211 30 20 -5 34 -2 53 13 34 27 652 768 672 806 14
26 13 32 -12 88 -31 69 -29 101 12 181 21 43 23 53 12 79 -13 32 -250 235
-285 244 -14 4 -41 -8 -84 -35 -72 -47 -117 -58 -170 -42 -51 15 -68 14 -95
-7 -23 -19 -243 -275 -424 -494 -53 -64 -100 -117 -104 -117 -4 -1 23 36 60
82 114 139 261 317 342 413 42 50 130 154 195 232 74 88 126 142 137 142 11 0
60 -35 111 -78z"/>
                    <path d="M780 2549 c-41 -11 -156 -42 -255 -69 -99 -28 -192 -50 -207 -50
l-28 0 0 -303 0 -304 107 29 c153 40 152 40 236 -40 63 -59 84 -73 161 -100
136 -50 434 -142 457 -142 52 0 119 61 119 110 0 68 -17 87 -139 159 -64 38
-156 90 -206 116 -110 59 -145 89 -145 127 0 48 31 68 104 68 l63 0 143 169
c78 93 141 173 139 178 -3 11 -292 60 -394 67 -62 4 -97 1 -155 -15z m333 -51
c94 -14 137 -25 137 -33 0 -17 -204 -261 -225 -269 -9 -3 -35 -6 -58 -6 -23
-1 -52 -6 -65 -14 -32 -17 -62 -65 -62 -98 0 -39 56 -98 131 -138 129 -69 305
-172 327 -193 33 -30 28 -92 -10 -120 -27 -20 -28 -20 -95 -2 -95 25 -420 133
-454 150 -15 8 -54 39 -86 68 -93 87 -107 90 -233 57 -41 -10 -78 -16 -83 -11
-4 4 -6 117 -5 251 l3 244 100 28 c344 97 440 117 510 110 17 -2 92 -12 168
-24z"/>
                    <path d="M14 2473 c2 -16 8 -64 11 -108 3 -44 17 -193 31 -332 13 -139 24
-270 24 -292 l0 -41 60 0 60 0 0 400 0 400 -96 0 -96 0 6 -27z m144 -367 c2
-339 -1 -387 -28 -360 -8 8 -70 604 -70 681 l0 34 48 -3 47 -3 3 -349z"/>
                    <path d="M1620 2351 c-106 -33 -194 -131 -220 -246 -19 -86 30 -209 111 -279
113 -97 297 -88 404 19 128 129 110 346 -38 455 -70 51 -182 73 -257 51z m218
-74 c39 -25 102 -99 102 -119 0 -4 -10 -8 -23 -8 -12 0 -39 -14 -60 -31 -32
-27 -40 -29 -55 -18 -9 8 -51 41 -92 75 -122 100 -140 104 -193 45 -36 -40
-41 -55 -52 -163 -6 -53 -4 -60 20 -84 21 -21 32 -25 58 -20 17 3 39 13 48 22
21 19 48 12 79 -21 l22 -24 -22 -36 c-15 -24 -20 -44 -16 -60 6 -22 3 -25 -21
-25 -42 0 -117 57 -153 116 -40 67 -51 153 -26 217 17 46 91 125 141 152 22
12 52 15 116 13 74 -3 91 -7 127 -31z m-135 -148 l122 -100 40 45 c40 44 40
44 63 26 12 -10 22 -21 22 -24 0 -8 -209 -260 -219 -264 -4 -1 -19 6 -32 17
l-23 19 37 41 c20 23 37 44 37 49 -1 11 -151 128 -158 122 -3 -3 -6 -16 -6
-29 -1 -19 -9 -26 -45 -37 l-44 -13 7 52 c3 29 6 66 6 83 0 28 50 114 66 114
3 0 60 -45 127 -101z m225 -197 c-13 -26 -44 -62 -67 -80 -78 -59 -63 -22 38
96 52 60 65 53 29 -16z"/>
                    <path d="M819 1047 c-19 -12 -42 -39 -52 -59 -27 -56 -9 -104 62 -166 31 -27
115 -102 186 -167 153 -138 246 -206 324 -237 53 -21 74 -23 401 -28 387 -6
387 -6 454 -81 l35 -38 263 25 c145 13 298 27 341 31 42 3 77 7 77 8 0 11
-147 361 -181 429 -76 156 -187 250 -328 276 -29 5 -207 10 -395 10 -320 0
-343 -1 -370 -19 -52 -35 -68 -85 -45 -149 20 -59 45 -66 243 -72 150 -4 181
-8 189 -21 6 -9 7 -24 4 -33 -6 -15 -33 -17 -304 -14 l-298 3 -65 34 c-36 18
-130 79 -210 136 -227 161 -265 176 -331 132z m161 -64 c14 -9 88 -60 166
-114 77 -54 173 -114 214 -133 l74 -36 287 0 c158 0 295 3 304 6 26 10 46 59
36 87 -20 51 -42 57 -213 57 -172 0 -200 7 -218 51 -14 33 -6 62 23 89 20 19
36 20 331 20 171 0 345 -5 386 -10 152 -20 245 -94 325 -258 61 -125 145 -330
145 -353 0 -21 -4 -22 -300 -49 -288 -26 -285 -27 -328 11 -81 71 -90 73 -467
79 -286 5 -347 9 -384 23 -54 21 -102 50 -164 98 -83 65 -385 340 -391 356
-19 49 10 105 59 115 21 5 74 -13 115 -39z"/>
                    <path d="M2585 218 c-165 -16 -324 -31 -353 -34 l-53 -6 3 -54 3 -55 400 0
400 1 1 90 1 90 -51 -1 c-28 -1 -186 -15 -351 -31z m365 -46 c0 -9 -3 -27 -6
-39 l-6 -23 -354 0 c-303 0 -354 2 -354 15 0 18 2 18 375 53 186 17 317 25
328 20 9 -5 17 -16 17 -26z"/>
                  </g>
                </svg>
              <span className="text-gray-600">Cash on Dilivery</span>
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("Online Payment")}
              className={`border ${paymentMethod === "Online Payment"
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
