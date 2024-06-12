// import { configureStore } from "@reduxjs/toolkit";

// import { userReducer } from "./reducers/userReducers";

// const userInfoFromStorage = localStorage.getItem("account")
//   ? JSON.parse(localStorage.getItem("account"))
//   : null;

// const initialState = {
//   user: { userInfo: userInfoFromStorage },
// };

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   preloadedState: initialState,
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";

// Import all reducers
import {
  productListReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
} from "../reducers/productReducers";
import { cartReducer } from "../reducers/cartReducers";
// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
//   userListReducer,
//   userDeleteReducer,
//   userUpdateReducer,
// } from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from "../reducers/orderReducers";

// Import blog-related reducers (assuming userReducer handles the blog user state)
import { userReducer as blogUserReducer } from "./reducers/userReducers"; 

// Retrieve data from localStorage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "PayPal";

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const blogUserInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

// Combine initial states
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  // userLogin: { userInfo: userInfoFromStorage },
  user: { userInfo: blogUserInfoFromStorage },
};

// Combine reducers
const rootReducer = {
  productList: productListReducer,
  productDetails: productDetailReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCreateReview: productCreateReviewReducer,
  cart: cartReducer,
  // userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  user: blogUserReducer,  // Adding blog-related user reducer
};

// Configure the store with combined reducers and initial state
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
