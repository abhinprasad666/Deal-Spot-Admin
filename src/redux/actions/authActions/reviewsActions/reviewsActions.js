
import axiosInstance from "../../../../api/axios";
import { reviewsFail, reviewsRequest, reviewsSuccess } from "../../../slices/reviews/reviewSlice";




export const getAllreviews = () => async (dispatch) => {
    try {
        dispatch(reviewsRequest());

        const { data } = await axiosInstance.get("api/v1/review/admin/allReviews");
        dispatch(reviewsSuccess(data));
        
    } catch (error) {
        console.warn("get reviews failed:", error.response?.data?.error || error.message);

        dispatch(reviewsFail(error.response?.data?.error || "get reviews faild"));

    }
};
