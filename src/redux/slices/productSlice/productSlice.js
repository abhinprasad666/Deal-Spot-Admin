import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productsLoading: false,
 products: [],
  productsError:null,

}

const productslice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   productsRequest: (state) => {
      state.productsLoading = true
      
    },
   productsSuccess: (state, action) => {
      state.productsLoading = false
      state.products = action.payload
     
    },
   productsFail: (state,action) => {
      state.productsLoading = false
      state.productsError=action.payload
    },
  },
})

export const {productsSuccess,productsRequest,productsFail}=productslice.actions;

export default productslice.reducer