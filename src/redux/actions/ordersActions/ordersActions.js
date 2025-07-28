import axiosInstance from "../../../api/axios";
import {
    ordersFail,
    ordersRequest,
    ordersSuccess,
    orderStatusCountsFail,
    orderStatusCountsRequest,
    orderStatusCountsSuccess,
    totalRevenueFail,
    totalRevenueRequest,
    totalRevenueSuccess,
    updateOrderStatusFail,
    updateOrderStatusRequest,
    updateOrderStatusSuccess,
} from "../../slices/orderSlice/orderSlice";

export const getAllorders = () => async (dispatch) => {
    try {
        dispatch(ordersRequest());

        const { data } = await axiosInstance.get("api/v1/order/admin/allOrders");
        dispatch(ordersSuccess(data));
    } catch (error) {
        console.warn("get orders failed:", error.response?.data?.error || error.message);

        dispatch(ordersFail(error.response?.data?.error || "get orders faild"));
    }
};

// get total revenue
export const getTotalRevenue = () => async (dispatch) => {
    try {
        dispatch(totalRevenueRequest());

        const { data } = await axiosInstance.get("api/v1/order/total/revenue");
        dispatch(totalRevenueSuccess(data));
    } catch (error) {
        console.warn("gettotalRevenue failed:", error.response?.data?.error || error.message);

        dispatch(totalRevenueFail(error.response?.data?.error || "get totalRevenue faild"));
    }
};

//getOrderStatusCounts

export const getOrderStatusCounts = () => async (dispatch) => {
    try {
        dispatch(orderStatusCountsRequest());

        const { data } = await axiosInstance.get("api/v1/order/status/counts");
        dispatch(orderStatusCountsSuccess(data));
    } catch (error) {
        console.warn("get orderStatusCounts failed:", error.response?.data?.error || error.message);

        dispatch(orderStatusCountsFail(error.response?.data?.error || "get orderStatusCounts faild"));
    }
};

//update order status
export const updateOrderStatus = ({localStatus, orderId}) => async (dispatch) => {
    try {
        console.log("action new status",localStatus)
        dispatch(updateOrderStatusRequest());

        const { data } = await axiosInstance.put(`api/v1/order/${orderId}/status`,{newStatus:localStatus});
        dispatch(updateOrderStatusSuccess(data));
    } catch (error) {
        console.warn("error in update order status:", error.response?.data?.error || error.message);

        dispatch(updateOrderStatusFail(error.response?.data?.error || "role update fail"));
    }
};
