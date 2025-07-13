import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  PackageSearch,
  ShoppingCart,
  ListOrdered,
  MessageSquareText,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const AdminSidebar = ({ isOpen, onClose, theme }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  const baseBg = theme === "dark" ? "bg-[#0f172a]" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <div
      className={`absolute top-16 left-0 w-full z-40 overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
        isOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
      } ${baseBg} ${textColor} rounded-b-xl`}
    >
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-pink-600 dark:bg-gray-700 ">

        {/* === Management === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <button
            onClick={() => toggleExpand("management")}
            className="w-full flex justify-between items-center font-semibold mb-3"
          >
            <span className="flex items-center gap-2">👥 Management</span>
            {expanded === "management" ? <ChevronDown /> : <ChevronRight />}
          </button>
          {expanded === "management" && (
            <div className="space-y-2 text-sm">
              <Link
                to="/admin/users"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              >
                <Users size={18} /> Users
              </Link>
              <Link
                to="/admin/sellers"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              >
                <UserCheck size={18} /> Sellers
              </Link>
            </div>
          )}
        </div>

        {/* === Products === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <button
            onClick={() => toggleExpand("products")}
            className="w-full flex justify-between items-center font-semibold mb-3"
          >
            <span className="flex items-center gap-2">🛒 Products</span>
            {expanded === "products" ? <ChevronDown /> : <ChevronRight />}
          </button>
          {expanded === "products" && (
            <div className="space-y-2 text-sm">
              <Link
                to="/admin/products"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-green-100 dark:hover:bg-green-900/50 transition"
              >
                <PackageSearch size={18} /> All Products
              </Link>
              <Link
                to="/admin/products/create"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md bg-green-100 dark:bg-green-900/50 hover:bg-green-200 dark:hover:bg-green-800 transition font-semibold"
              >
                ➕ Create Product
              </Link>
            </div>
          )}
        </div>

        {/* === Categories === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <button
            onClick={() => toggleExpand("categories")}
            className="w-full flex justify-between items-center font-semibold mb-3"
          >
            <span className="flex items-center gap-2">📂 Categories</span>
            {expanded === "categories" ? <ChevronDown /> : <ChevronRight />}
          </button>
          {expanded === "categories" && (
            <div className="space-y-2 text-sm">
              <Link
                to="/admin/categories"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              >
                <ListOrdered size={18} /> All Categories
              </Link>
              <Link
                to="/admin/category/create"
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-md bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800 transition font-semibold"
              >
                ➕ Create Category
              </Link>
            </div>
          )}
        </div>

        {/* === Reviews === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <Link
            to="/admin/reviews"
            onClick={onClose}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-lime-100 dark:hover:bg-lime-900/50 transition"
          >
            <MessageSquareText size={18} />Reviews
          </Link>
        </div>

        {/* === Orders === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <Link
            to="/admin/orders"
            onClick={onClose}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/50 transition"
          >
            <ShoppingCart size={18} />Orders
          </Link>
        </div>

        {/* === Settings === */}
        <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
          <Link
            to="/admin/profile"
            onClick={onClose}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-orange-100 dark:hover:bg-orange-900/50 transition"
          >
            <Settings size={18} />Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
