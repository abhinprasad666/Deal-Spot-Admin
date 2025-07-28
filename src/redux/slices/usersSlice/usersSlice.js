import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  usersLoading: false,
  users: [],
  usersError:null,
  updateRole:null

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
    //change role
       changeRoleRequest: (state) => {
      state.usersLoading = true
      
    },
    changeRoleSuccess: (state, action) => {
      state.usersLoading = false
      state.updateRole= action.payload.message
     
    },
    changeRoleFail: (state,action) => {
      state.usersLoading = false
      state.usersError=action.payload
    },
  },
})

export const {usersSuccess,usersRequest,usersFail,changeRoleFail,changeRoleRequest,changeRoleSuccess}=usersSlice.actions;

export default usersSlice.reducer