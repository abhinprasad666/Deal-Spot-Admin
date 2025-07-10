import axios from "axios";
import axiosInstance from "../../../api/axios";
import {
    addactegoriesRequest,
    addCategoriesFail,
    addCategoriesSuccess,
    categoriesFail,
    categoriesRequest,
    categoriesSuccess,
} from "../../slices/categorySlices/categorySlices";

// get all categories
export const getCategories = async (dispatch) => {
    console.log("hello");
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
        console.log("seller add  product", data);
    } catch (error) {
        console.log("error in  seller add product", error);
        dispatch(addCategoriesFail(error.response?.data?.error || "create category faild"));
    }
};
