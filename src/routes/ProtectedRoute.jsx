import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "lucide-react";

const ProtectedRoute = ({ isAdmin }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);


console.log("User",user)
    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />;
    }

    if (isAuthenticated) {
        if (isAdmin === true && user.role !== "admin") {
            return <Navigate to="/login" replace />;
        }
        return (
            <div>
                <Outlet />;
            </div>
        );
    }

    if (loading) {
        return <Loader />;
    }
};

export default ProtectedRoute;
