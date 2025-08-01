import { configureStore } from '@reduxjs/toolkit';
import auth from "./slices/authSlice";
import users from "./slices/usersSlice/usersSlice"
import sellers from "./slices/sellerSlice/sellerSlice"
import products from "./slices/productSlice/productSlice"
import reviews from "./slices/reviews/reviewSlice"
import orders from "./slices/orderSlice/orderSlice"
import category from "./slices/categorySlices/categorySlices"
import deleteUser from "./slices/usersSlice/deleteUserSlice/deleteUserSlice"


export const store = configureStore({
  reducer: {
   auth,
   users,
   sellers,
   products,
   reviews,
   orders,
   category,
   deleteUser

  },
});
