import axiosInstance from "../../../api/axios";
import { changeRoleFail, changeRoleRequest, changeRoleSuccess, usersFail, usersRequest, usersSuccess } from "../../slices/usersSlice/usersSlice";


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

//change role
export const changeUserRole = ({id,role}) => async (dispatch) => {
    try {
        dispatch(changeRoleRequest());

        const { data } = await axiosInstance.get(`api/v1/admin/role/${id}/${role}`);
        dispatch(changeRoleSuccess(data));
        
        
    } catch (error) {
        console.warn("error in update user role faild:", error.response?.data?.error || error.message);

        dispatch(changeRoleFail(error.response?.data?.error || "update user role faild"));

    }
};
