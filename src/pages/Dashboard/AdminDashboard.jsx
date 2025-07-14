import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../redux/actions/usersActoin/usersActons";
import { getAllsellers } from "../../redux/actions/sellerActions/sellerActions";
import { getAllproducts } from "../../redux/actions/productActions/productAction";
import { getAllreviews } from "../../redux/actions/authActions/reviewsActions/reviewsActions";
import {
    getAllorders,
    getOrderStatusCounts,
    getTotalRevenue,
} from "../../redux/actions/ordersActions/ordersActions";
import { getCategories } from "../../redux/actions/categoryActions/categoryActions";
import { DashboardStats } from "./DashboardStats";

const AdminDashboard = () => {
    const dispatch = useDispatch();

    const { usersError, users, usersLoading } = useSelector((state) => state.users);
    const { sellersError, sellers, sellersLoading } = useSelector((state) => state.sellers);
    const { productsError, products, productsLoading } = useSelector((state) => state.products);
    const { reviewsError, reviews, reviewsLoading } = useSelector((state) => state.reviews);
    const { categories, getCategoryLoading, getCategoryError } = useSelector((state) => state.category);
    const {
        revenuesError,
        ordersError,
        orders,
        ordersLoading,
        orderStatusCounts,
        orderStatusCountsError,
        totalRevenue,
    } = useSelector((state) => state.orders);
const { isAuthenticated} = useSelector((state) => state.auth);
    useEffect(() => {
      dispatch(getAllUsers());
        dispatch(getAllsellers());
        dispatch(getAllproducts());
        dispatch(getAllreviews());
        dispatch(getAllorders());
        dispatch(getTotalRevenue());
        dispatch(getOrderStatusCounts());
        dispatch(getCategories);}
    , [dispatch,isAuthenticated]);

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
        categories,
        getCategoryLoading,
        getCategoryError,
        orderStatusCounts,
        orderStatusCountsError,
        totalRevenue,
        revenuesError,
    });

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            {/* Revenue Card - Full Width */}
            <div className="w-full mb-6">
                {stats
                    .filter((item) => item.label === "Revenue")
                    .map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center hover:scale-[1.02] transition"
                        >
                            <div>
                                <p className="text-lg text-gray-500 dark:text-gray-300">{item.label}</p>
                                <h3 className="text-4xl font-bold mt-1 text-pink-600 dark:text-pink-400">{item.value}</h3>
                            </div>
                            <div className={`p-4 rounded-full ${item.bg} mt-4 md:mt-0`}>{item.icon}</div>
                        </div>
                    ))}
            </div>

            {/* All Other Stat Cards - Fully Clickable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats
                    .filter((item) => item.label !== "Revenue")
                    .map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.03] group"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-md text-gray-500 dark:text-gray-300">{item.label}</p>
                                    <h3 className="text-3xl font-bold mt-1">{item.value}</h3>
                                </div>
                                <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
                            </div>

                            <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                                View Details →
                            </span>
                        </Link>
                    ))}
            </div>

            {/* Coming Soon Section */}
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
