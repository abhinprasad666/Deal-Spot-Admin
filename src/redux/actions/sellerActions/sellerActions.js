import axiosInstance from "../../../api/axios";
import { sellersFail, sellersRequest, sellersSuccess } from "../../slices/sellerSlice/sellerSlice";



export const getAllsellers = () => async (dispatch) => {
    try {
        dispatch(sellersRequest());

        const { data } = await axiosInstance.get("api/v1/admin/sellers");
        dispatch(sellersSuccess(data));
        
    } catch (error) {
        console.warn("get sellers failed:", error.response?.data?.error || error.message);

        dispatch(sellersFail(error.response?.data?.error || "get sellers faild"));

    }
};
