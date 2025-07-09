import axiosInstance from "../../../api/axios";
import { usersFail, usersRequest, usersSuccess } from "../../slices/usersSlice/usersSlice";


export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(usersRequest());

        const { data } = await axiosInstance.get("api/v1/admin/users");
        dispatch(usersSuccess(data));
        
    } catch (error) {
        console.warn("get users failed:", error.response?.data?.error || error.message);

        dispatch(usersFail(error.response?.data?.error || "get users faild"));

    }
};
