import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ProtectedRoute from "../routes/ProtectedRoute";
import AdminWelcome from "../pages/AdminWelcome/AdminWelcome";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import AdminUsersPage from "../pages/AdminEntityList/AdminUsersPage";
import AdminSellersPage from "../pages/AdminEntityList/AdminSellersPage";
import ProductListTable from "../pages/ProductListTable/ProductListTable";

import OrdersPage from "../pages/OrdersListTable/OrderPage";
import CategoryTable from "../pages/category/CategoryTable";
import CreateCategoryPage from "../pages/category/CreateCategoryForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { path: "", element: <AdminDashboard /> },
                    { path: "admin/users", element: <AdminUsersPage /> },
                    { path: "admin/sellers", element: <AdminSellersPage /> },
                    { path: "admin/products", element: <ProductListTable/> },
                    { path: "admin/orders", element: <OrdersPage/> },
                    { path: "admin/categories", element: <CategoryTable/> },
                    { path: "admin/category/create", element: <CreateCategoryPage/> },
                ],
            },
        ],
    },

    //welcome seller
    {
        path: "/welcome",
        element: <AdminWelcome />,
    },

    //  Auth Routes
    {
        path: "/login",
        element: <Login />,
        // children: [{ path: "", element: <Login /> }],
    },

    // {
    //     path: "/forgot-password",
    //     element: <AuthLayout />,
    //     children: [{ path: "", element: <ForgotPasswordPage /> }],
    // },
    // {
    //     path: "/verify-otp",
    //     element: <AuthLayout />,
    //     children: [{ path: "", element: <VerifyOtpPage /> }],
    // },
    // {
    //     path: "/reset-password",
    //     element: <AuthLayout />,
    //     children: [{ path: "", element: <ResetPasswordPage /> }],
    // },
    // {
    //     path: "/password-update-success",
    //     element: <AuthLayout />,
    //     children: [{ path: "", element: <PasswordResetSuccessPage /> }],
    // },
    // {
    //     path: "/reset-error",
    //     element: <AuthLayout />,
    //     children: [{ path: "", element: <ResetErrorPage /> }],
    // },

    // 404 Page
    { path: "*", element: <NotFound /> },
]);

export default router;
