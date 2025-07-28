import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  deleteUserLoading: false,
 deleteUser:null,
   deleteUserError:null,

}

const deleteUserSlice = createSlice({
  name: 'deleteUser',
  initialState,
  reducers: {
   deleteUserRequest: (state) => {
      state.deleteUserLoading = true
      
    },
   deleteUserSuccess: (state, action) => {
      state.deleteUserLoading = false
      state.deleteUser = action.payload.message
     
    },
   deleteUserFail: (state,action) => {
      state.deleteUserLoading = false
      state. deleteUserError=action.payload
    },
  },
})

export const {
    deleteUserSuccess,
    deleteUserRequest,
    deleteUserFail
    
}=deleteUserSlice.actions;

export default deleteUserSlice.reducer