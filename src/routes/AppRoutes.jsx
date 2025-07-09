import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import  ProtectedRoute from "../routes/ProtectedRoute"
import AdminWelcome from "../pages/AdminWelcome/AdminWelcome";
import Login from "../pages/login/Login"
import NotFound from "../pages/NotFound";
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute/>,
        children: [
            {
                element:<MainLayout /> ,
                children: [
                    { path: "", element: <AdminDashboard/> },
                    
                ],
            },
        ],
    },

   


//welcome seller
     {
        path: "/welcome",
        element:<AdminWelcome/>
        
    },

    //  Auth Routes
    {
        path: "/login",
        element: <Login/>,
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
