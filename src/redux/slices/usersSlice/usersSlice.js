import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  usersLoading: false,
  users: [],
  usersError:null,

}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequest: (state) => {
      state.usersLoading = true
      
    },
    usersSuccess: (state, action) => {
      state.usersLoading = false
      state.users = action.payload 
     
    },
    usersFail: (state,action) => {
      state.usersLoading = false
      state.usersError=action.payload
    },
  },
})

export const {usersSuccess,usersRequest,usersFail}=usersSlice.actions;

export default usersSlice.reducer