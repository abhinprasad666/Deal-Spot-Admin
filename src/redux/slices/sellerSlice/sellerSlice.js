import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  sellerLoading: false,
 sellers: [],
  error:null,

}

const sellerSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {
   sellersRequest: (state) => {
      state.sellerLoading = true
      
    },
   sellersSuccess: (state, action) => {
      state.sellerLoading = false
      state.sellers = action.payload.sellers 
     
    },
   sellersFail: (state,action) => {
      state.sellerLoading = false
      state.error=action.payload
    },
  },
})

export const {sellersSuccess,sellersRequest,sellersFail}=sellerSlice.actions;

export default sellerSlice.reducer