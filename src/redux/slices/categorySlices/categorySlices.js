import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 getCategoryLoading: false,
  categoryLoading:false,
  categories: [],
  getCategoryError:null,
  categoryError:null

}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
     state.getCategoryLoading= true
      state.loading=true
    },
    categoriesSuccess: (state, action) => {
     state.getCategoryLoading= false
      state.loading=false
      state.categories = action.payload 
     
    },
    categoriesFail: (state,action) => {
      state.loading=false
     state.getCategoryLoading= false
      state.getCategoryError=action.payload
    },
    //create categoris
     addactegoriesRequest: (state) => {
      state.categoryLoading = true
      
    },
    addCategoriesSuccess: (state, action) => {
      state.categoryLoading = false
      
      state.categories = action.payload.categories 
     
    },
    addCategoriesFail: (state,action) => {
      state.categoryLoading=false
     state.getCategoryLoading= false
      state.categoryError=action.payload
    },
  },
})

export const {
  categoriesSuccess,
  categoriesRequest,
  categoriesFail,

  //add category
  addactegoriesRequest,
  addCategoriesSuccess,
  addCategoriesFail
}=categoriesSlice.actions;

export default categoriesSlice.reducer