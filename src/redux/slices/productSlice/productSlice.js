import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productLoading: false,
 products: [],
  error:null,

}

const productslice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   productsRequest: (state) => {
      state.productLoading = true
      
    },
   productsSuccess: (state, action) => {
      state.productLoading = false
      state.products = action.payload.products 
     
    },
   productsFail: (state,action) => {
      state.productLoading = false
      state.error=action.payload
    },
  },
})

export const {productsSuccess,productsRequest,productsFail}=productslice.actions;

export default productslice.reducer