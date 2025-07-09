import axiosInstance from "../../../api/axios";
import { loadUserRequest, loadUserSuccess, loadUserFail } from "../../slices/authSlice";

export const loadUser = () => async (dispatch) => {
    try {
        dispatch(loadUserRequest());

        const { data } = await axiosInstance.get("api/v1/user/me");

        dispatch(loadUserSuccess(data));
        console.log("admin data",data)
    } catch (error) {
        console.warn("Load user failed:", error.response?.data?.error || error.message);

        dispatch(loadUserFail(error.response?.data?.error || "authenticated!"));

        if (error.response && error.response.status === 401) {
            localStorage.removeItem("isLoggedIn");
        }
    }
};
