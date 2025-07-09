import { configureStore } from '@reduxjs/toolkit';
import auth from "./slices/authSlice";
import user from "./slices/usersSlice/usersSlice"
import seller from "./slices/sellerSlice/sellerSlice"
import product from "./slices/productSlice/productSlice"
import review from "./slices/reviews/reviewSlice"
import order from "./slices/orderSlice/orderSlice"




export const store = configureStore({
  reducer: {
   auth,
   user,
   seller,
   product,
   review,
   order



  },
});
