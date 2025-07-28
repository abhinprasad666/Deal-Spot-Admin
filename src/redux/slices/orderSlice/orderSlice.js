import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordersLoading: false,
    orders: [],
    totalRevenue: null,
    orderStatusCounts: {},
    ordersError: null,
    revenuesError: null,
    orderStatusCountsError: null,
    orderStatusMessage: null,
};

const orderslice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        ordersRequest: (state) => {
            state.ordersLoading = true;
        },
        ordersSuccess: (state, action) => {
            state.ordersLoading = false;
            state.orders = action.payload;
        },
        ordersFail: (state, action) => {
            state.ordersLoading = false;
            state.ordersError = action.payload;
        },

        ///totalRevenue
        totalRevenueRequest: (state) => {
            state.ordersLoading = true;
        },
        totalRevenueSuccess: (state, action) => {
            state.ordersLoading = false;
            state.totalRevenue = action.payload.totalRevenue;
        },
        totalRevenueFail: (state, action) => {
            state.ordersLoading = false;
            state.revenuesError = action.payload;
        },
        //
        orderStatusCountsRequest: (state) => {
            state.ordersLoading = true;
        },
        orderStatusCountsSuccess: (state, action) => {
            state.ordersLoading = false;
            state.orderStatusCounts = action.payload.statusCounts;
        },
        orderStatusCountsFail: (state, action) => {
            state.ordersLoading = false;
            state.orderStatusCountsError = action.payload;
        },
        // update order status
        updateOrderStatusRequest: (state) => {
            state.ordersLoading = true;
        },
        updateOrderStatusSuccess: (state, action) => {
            state.ordersLoading = false;
            state.orderStatusMessage = action.payload.message;
        },
        updateOrderStatusFail: (state, action) => {
            state.ordersLoading = false;
            state.orderStatusCountsError = action.payload;
        },
    },
});

export const {
    ordersSuccess,
    ordersRequest,
    ordersFail,
    //totalRevenue
    totalRevenueRequest,
    totalRevenueSuccess,
    totalRevenueFail,
    //orderStatusCounts
    orderStatusCountsRequest,
    orderStatusCountsSuccess,
    orderStatusCountsFail,
    //update order statu
    updateOrderStatusRequest,
    updateOrderStatusSuccess,
    updateOrderStatusFail
} = orderslice.actions;

export default orderslice.reducer;
