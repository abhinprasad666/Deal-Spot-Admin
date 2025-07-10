import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   sellersLoading: false,
 sellers: [],
  sellersError:null,

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
      state.sellers = action.payload
     
    },
   sellersFail: (state,action) => {
      state.sellerLoading = false
      state.sellersError=action.payload
    },
  },
})

export const {sellersSuccess,sellersRequest,sellersFail}=sellerSlice.actions;

export default sellerSlice.reducer