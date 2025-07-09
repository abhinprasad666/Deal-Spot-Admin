import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AdminWelcome from "./pages/AdminWelcome/AdminWelcome";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                <Route path="welcome" element={<AdminWelcome/>}></Route>
                 <Route path="" element={<AdminDashboard/>}></Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
