import axiosInstance from "../../../api/axios";
import { addactegoriesRequest, addCategoriesFail, addCategoriesSuccess, categoriesFail, categoriesRequest, categoriesSuccess } from "../../slices/categorySlices/categorySlices";

// get all categories
export const getCategories = async (dispatch) => {
    console.log("hello")
    dispatch(categoriesRequest());
    try {
        const {data} = await axiosInstance(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category`);

        dispatch(categoriesSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(categoriesFail(error.response?.data?.error || "Something went wrong"));
    }
};

//create categories
export const createCategories = async (dispatch) => {
    dispatch(addactegoriesRequest());
    try {
        const { data } = await axiosInstance(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category`);
        dispatch(addCategoriesSuccess(data));
    } catch (error) {
        console.log("error in create category", error);
        dispatch(addCategoriesFail(error.response?.data?.error || "create category faild"));
    }
};