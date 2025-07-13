import axios from "axios";
import axiosInstance from "../../../api/axios";
import {
    addactegoriesRequest,
    addCategoriesFail,
    addCategoriesSuccess,
    categoriesFail,
    categoriesRequest,
    categoriesSuccess,
    deleteCategoryFail,
    deleteCategoryRequest,
    deleteCategorySuccess,
    getSingleCategoryFail,
    getSingleCategoryRequest,
    getSingleCategorySuccess,
    updateCategoryFail,
    updateCategoryRequest,
    updateCategorySuccess,
} from "../../slices/categorySlices/categorySlices";

// get all categories
export const getCategories = async (dispatch) => {
    dispatch(categoriesRequest());
    try {
        const { data } = await axiosInstance(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category`);

        dispatch(categoriesSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(categoriesFail(error.response?.data?.error || "Something went wrong"));
    }
};

//create categories

export const createCategory = (categoryData) => async (dispatch) => {

    console.log("form data")
    dispatch(addactegoriesRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category`, categoryData, config);

        dispatch(addCategoriesSuccess(data));
       
    } catch (error) {
       
        dispatch(addCategoriesFail(error.response?.data?.error || "create category faild"));
    }
};


//get single
export const getSingleCategory = (id) => async (dispatch) => {

    dispatch(getSingleCategoryRequest());
    try {
    
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category/${id}`);

        dispatch(getSingleCategorySuccess(data));
       
    } catch (error) {
        console.log("error in get single category", error);
        dispatch(getSingleCategoryFail(error.response?.data?.error || "single category faild"));
    }
};

// edit category
export const  updateCategory = (id,categoryData) => async (dispatch) => {

    console.log("form data id",id)
    dispatch(updateCategoryRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category/${id}`, categoryData, config);

        dispatch(updateCategorySuccess(data));
       
    } catch (error) {
       
        dispatch(updateCategoryFail(error.response?.data?.error || "update category faild"));
    }
};

//delete
export const deleteCategory = (id) => async (dispatch) => {

    dispatch(deleteCategoryRequest());
    try {
    
        const { data } = await axiosInstance.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category/${id}`);

        dispatch(deleteCategorySuccess(data));
       
    } catch (error) {
        console.log("error in get delete category", error);
        dispatch(deleteCategoryFail(error.response?.data?.error || "delete category faild"));
    }
};