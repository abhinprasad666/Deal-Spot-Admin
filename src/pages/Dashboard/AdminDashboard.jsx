import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/actions/usersActoin/usersActons";
import { getAllsellers } from "../../redux/actions/sellerActions/sellerActions";
import { getAllproducts } from "../../redux/actions/productActions/productAction";
import { getAllreviews } from "../../redux/actions/authActions/reviewsActions/reviewsActions";
import { getAllorders, getOrderStatusCounts, getTotalRevenue } from "../../redux/actions/ordersActions/ordersActions";
import { DashboardStats } from "./DashboardStats";




const AdminDashboard = () => {
    const dispatch = useDispatch();

    const { usersError, users, usersLoading } = useSelector((state) => state.users);
    const { sellersError, sellers, sellersLoading } = useSelector((state) => state.sellers);
    const { productsError, products, productsLoading } = useSelector((state) => state.products);
    const { reviewsError, reviews, reviewsLoading } = useSelector((state) => state.reviews);
    const { revenuesError, ordersError, orders, ordersLoading, orderStatusCounts, orderStatusCountsError, totalRevenue } =
        useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllsellers());
        dispatch(getAllproducts());
        dispatch(getAllreviews());
        dispatch(getAllorders());
        dispatch(getTotalRevenue());
        dispatch(getOrderStatusCounts());
    }, [dispatch]);

    const stats = DashboardStats({
        usersLoading,
        usersError,
        users,
        sellersLoading,
        sellersError,
        sellers,
        productsLoading,
        productsError,
        products,
        reviewsLoading,
        reviewsError,
        reviews,
        ordersLoading,
        ordersError,
        orders,
        orderStatusCounts,
        orderStatusCountsError,
        totalRevenue,
        revenuesError,
    });

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">Admin Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <Link
                        to={item.link}
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg hover:scale-[1.02] transition"
                    >
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{item.label}</p>
                            <h3 className="text-2xl font-bold">{item.value}</h3>
                        </div>
                        <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
                    </Link>
                ))}
            </div>

            {/* Coming Soon Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon...</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">User Feedback</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
