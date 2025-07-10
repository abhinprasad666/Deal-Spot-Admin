import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/loaders/Loader";

const ProtectedRoute = ({ isAdmin }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <Loader />;
    }

    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />;
    }

    if (isAuthenticated) {
        if (isAdmin === true && user.role !== "admin") {
            return <Navigate to="/login" replace />;
        }
        return <Outlet />;
    }

    return null;
};

export default ProtectedRoute;
