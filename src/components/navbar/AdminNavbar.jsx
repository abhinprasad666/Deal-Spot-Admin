import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Bell, LayoutDashboard } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import AdminSidebar from "./AdminSidebar";

const AdminNavbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <>
            <nav
                className={`transition-all duration-500 sticky top-0 z-50 shadow-sm ${
                    theme === "dark" ? "bg-gray-900 text-white" : "bg-pink-600 text-white"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/admin/dashboard" className="flex flex-col leading-tight">
                            <span className="text-xl sm:text-2xl font-bold tracking-tight">
                                <span className="text-white">Deal</span>
                                <span className="text-yellow-300">Spot</span>
                            </span>
                            <span className="text-sm font-medium text-gray-200 dark:text-gray-300">Admin Panel</span>
                        </Link>

                        {/* Right Side */}
                        <div className="flex items-center space-x-5">
                            {/* Dashboard Button */}
                            <Link
                                to="/"
                                className="flex items-center gap-2 text-base font-semibold px-3 py-1 rounded-md bg-white/10 hover:bg-white/30 transition"
                            >
                                <LayoutDashboard size={20} />
                                Dashboard
                            </Link>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Notification */}
                            <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>

                            {/* Profile Dropdown */}
                            <ProfileDropdown />

                            {/* Sidebar Toggle */}
                            <button
                                onClick={() => setSidebarOpen((prev) => !prev)}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            >
                                {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <AdminSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} />
        </>
    );
};

export default AdminNavbar;
