import axiosInstance from "../../../api/axios";
import { loginFail, loginRequest, loginSuccess } from "../../slices/authSlice";

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(loginRequest());

        const { data } = await axiosInstance.post("api/v1/admin/login", userData);
           sessionStorage.setItem("admin", "true");
        dispatch(loginSuccess(data));
    } catch (error) {
        console.log("Login failed error response:", error.response?.data);
        dispatch(loginFail(error.response?.data?.error || "Login failed"));
    }
};
