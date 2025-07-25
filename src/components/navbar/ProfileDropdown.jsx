import React, { useState, useEffect, useRef } from "react";
import { LogOut, Settings, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions/logoutAction";
import { useDispatch } from "react-redux";
import { clearAuthStateMessage } from "../../redux/slices/authSlice";

const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearAuthStateMessage());
        navigate("/login");
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:text-pink-100"
            >
                <User size={18} />
                <span>Admin</span>
                <span className="ml-1">▼</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white border dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                    <Link
                        to="/admin/profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Settings size={16} />
                        Profile Settings
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
