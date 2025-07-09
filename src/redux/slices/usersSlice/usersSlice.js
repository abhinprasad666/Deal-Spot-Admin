import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userLoading: false,
  users: [],
  error:null,

}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequest: (state) => {
      state.userLoading = true
      
    },
    usersSuccess: (state, action) => {
      state.userLoading = false
      state.users = action.payload.users 
     
    },
    usersFail: (state,action) => {
      state.userLoading = false
      state.error=action.payload
    },
  },
})

export const {usersSuccess,usersRequest,usersFail}=usersSlice.actions;

export default usersSlice.reducer