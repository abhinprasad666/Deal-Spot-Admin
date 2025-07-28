import axiosInstance from "../../../../api/axios";
import { deleteCategoryFail } from "../../../slices/categorySlices/categorySlices";
import { deleteUserRequest } from "../../../slices/userSlice/deleteUserSlice";
import { deleteUserSuccess } from "../../../slices/userSlice/deleteUserSlice";



export const deleteUser =  (id) => async (dispatch) => {
    try {
        dispatch(deleteUserRequest());

        const { data } = await axiosInstance.delete(`api/v1/delete/${id}`);
        dispatch(deleteUserSuccess(data));
    } catch (error) {
        console.warn("delete user failed:", error.response?.data?.error || error.message);

        dispatch(deleteCategoryFail(error.response?.data?.error || "delete user faild"));
    }
};