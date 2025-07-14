import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/authActions/loadUser";
import router from "./routes/AppRoutes";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const isAdmin = sessionStorage.getItem("admin");

        if (isAdmin === "true") {
            dispatch(loadUser());
        }
    }, [dispatch]);

    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
