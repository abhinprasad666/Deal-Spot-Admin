import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AdminWelcome from "./pages/AdminWelcome/AdminWelcome";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/welcome" element={<AdminWelcome />} />
          </Route>
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Toasts */}
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
