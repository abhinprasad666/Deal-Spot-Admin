import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 ordersLoading: false,
 orders: [],
 totalRevenue:null,
 orderStatusCounts:null,
  error:null,

}

const orderslice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
   ordersRequest: (state) => {
      state.reviewLoading = true
      
    },
   ordersSuccess: (state, action) => {
      state.reviewLoading = false
      state.orders = action.payload.orders 
     
    },
   ordersFail: (state,action) => {
      state.reviewLoading = false
      state.error=action.payload
    },

    ///totalRevenue
   totalRevenueRequest: (state) => {
      state.reviewLoading = true
      
    },
   totalRevenueSuccess: (state, action) => {
      state.reviewLoading = false
      state.orders = action.payload.totalRevenue
     
    },
   totalRevenueFail: (state,action) => {
      state.reviewLoading = false
      state.error=action.payload
    },
//
orderStatusCountsRequest: (state) => {
      state.reviewLoading = true
      
    },
  orderStatusCountsSuccess: (state, action) => {
      state.reviewLoading = false
      state.orders = action.payload.orderStatusCounts
     
    },
   orderStatusCountsFail: (state,action) => {
      state.reviewLoading = false
      state.error=action.payload
    },
  },
})

export const {
    ordersSuccess,
    ordersRequest,
    ordersFail,
    //totalRevenue
    totalRevenueRequest,
    totalRevenueSuccess,
    totalRevenueFail,
    //orderStatusCounts
    orderStatusCountsRequest,
    orderStatusCountsSuccess,
    orderStatusCountsFail
}=orderslice.actions;

export default orderslice.reducer