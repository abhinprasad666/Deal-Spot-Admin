import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  reviewsLoading: false,
 reviews: [],
   reviewsError:null,

}

const reviewslice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
   reviewsRequest: (state) => {
      state.reviewsLoading = true
      
    },
   reviewsSuccess: (state, action) => {
      state.reviewsLoading = false
      state.reviews = action.payload
     
    },
   reviewsFail: (state,action) => {
      state.reviewsLoading = false
      state. reviewsError=action.payload
    },
  },
})

export const {
    reviewsSuccess,
    reviewsRequest,
    reviewsFail
    
}=reviewslice.actions;

export default reviewslice.reducer