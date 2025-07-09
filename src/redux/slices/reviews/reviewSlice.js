import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  reviewLoading: false,
 reviews: [],
  error:null,

}

const reviewslice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
   reviewsRequest: (state) => {
      state.reviewLoading = true
      
    },
   reviewsSuccess: (state, action) => {
      state.reviewLoading = false
      state.reviews = action.payload.reviews 
     
    },
   reviewsFail: (state,action) => {
      state.reviewLoading = false
      state.error=action.payload
    },
  },
})

export const {
    reviewsSuccess,
    reviewsRequest,
    reviewsFail
    
}=reviewslice.actions;

export default reviewslice.reducer