import axiosInstance from "../../../api/axios";
import { productsFail, productsRequest, productsSuccess } from "../../slices/productSlice/productSlice";




export const getAllproducts = () => async (dispatch) => {
    try {
        dispatch(productsRequest());

        const { data } = await axiosInstance.get("api/v1/product");
        dispatch(productsSuccess(data));
        
    } catch (error) {
        console.warn("get products failed:", error.response?.data?.error || error.message);

        dispatch(productsFail(error.response?.data?.error || "get products faild"));

    }
};
