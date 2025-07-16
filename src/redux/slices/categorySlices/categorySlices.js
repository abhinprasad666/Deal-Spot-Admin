import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getCategoryLoading: false,
    categoryLoading: false,
    categories: [],
    getCategoryError: null,
    categoryError: null,
    isUpdateCategory: null,
    singleCategoryLoading: null,
    getSingleCategoryError: null,
    updateCategoryLoading: false,
    updateCategoryError: null,
    singleCategory: {},
    categoryDelete: null,
    categoryDeleteError: null,
    categoryDeleteLoading: false,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoriesRequest: (state) => {
            state.getCategoryLoading = true;
            state.loading = true;
        },
        categoriesSuccess: (state, action) => {
            state.getCategoryLoading = false;
            state.loading = false;
            state.categories = action.payload;
        },
        categoriesFail: (state, action) => {
            state.loading = false;
            state.getCategoryLoading = false;
            state.getCategoryError = action.payload;
        },
        //create categoris
        addactegoriesRequest: (state) => {
            state.categoryLoading = true;
        },
        addCategoriesSuccess: (state, action) => {
            state.categoryLoading = false;
            state.isUpdateCategory = action.payload.message;
            state.categories = action.payload.categories;
        },
        addCategoriesFail: (state, action) => {
            state.categoryLoading = false;
            state.categoryError = action.payload;
        },
        //get single category
        getSingleCategoryRequest: (state) => {
            state.singleCategoryLoading = true;
        },
        getSingleCategorySuccess: (state, action) => {
            state.singleCategoryLoading = false;
            state.singleCategory = action.payload.category;
            state.categories = action.payload.categories;
        },
        getSingleCategoryFail: (state, action) => {
            state.singleCategoryLoading = false;
            state.categoryError = action.payload;
        },

        //update category
        updateCategoryRequest: (state) => {
            state.updateCategoryLoading = true;
            state.updateCategoryError = null;
        },
        updateCategorySuccess: (state, action) => {
            state.updateCategoryLoading = false;

            state.isUpdateCategory = action.payload.message;
            state.categories = action.payload.categories;
        },
        updateCategoryFail: (state, action) => {
            state.updateCategoryLoading = false;
            state.categoryError = action.payload;
        },

        //delete category
        deleteCategoryRequest: (state) => {
            state.categoryDeleteLoading = true;
        },
        deleteCategorySuccess: (state, action) => {
            state.categoryDeleteLoading = false;
            state.categoryDelete = action.payload.message;
        },
        deleteCategoryFail: (state, action) => {
            state.categoryDeleteLoading = false;
            state.categoryDeleteError = action.payload;
        },
        //crear category state
        clearCategoriesState: (state) => {
            state.getCategoryLoading = false;
            state.categoryLoading = false;
            state.getCategoryError = null;
            state.categoryError = null;
            state.isUpdateCategory = null;
            state.singleCategoryLoading = null, 
            state.getSingleCategoryError = null;
            state.updateCategoryLoading = null;
            state.updateCategoryError = null;
            state.categoryDeleteLoading = false;
            state.getCategoryLoading = false;
            state.categoryDeleteError = null;
            state.categoryDelete = null;
            state.categoryDeleteError = null;
            state.categoryDeleteLoading = false;

            //
        },
    },
});

export const {
    categoriesSuccess,
    categoriesRequest,
    categoriesFail,

    //add category
    addactegoriesRequest,
    addCategoriesSuccess,
    addCategoriesFail,
    clearCategoriesState,
    //get single category
    getSingleCategoryRequest,
    getSingleCategorySuccess,
    getSingleCategoryFail,
    //edit category
    updateCategoryRequest,
    updateCategorySuccess,
    updateCategoryFail,
    //delete
    deleteCategoryRequest,
    deleteCategorySuccess,
    deleteCategoryFail,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
