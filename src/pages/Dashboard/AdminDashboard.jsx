import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  UserCheck,
  MessageSquareText,
  Clock,
  Ban,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Users",
      value: "1,200",
      icon: <Users className="text-white" size={24} />,
      bg: "bg-blue-500",
      link: "/admin/users",
    },
    {
      label: "Total Sellers",
      value: "220",
      icon: <UserCheck className="text-white" size={24} />,
      bg: "bg-teal-500",
      link: "/admin/sellers",
    },
    {
      label: "Total Products",
      value: "350",
      icon: <Package className="text-white" size={24} />,
      bg: "bg-yellow-500",
      link: "/admin/products",
    },
    {
      label: "Total Reviews",
      value: "4,500",
      icon: <MessageSquareText className="text-white" size={24} />,
      bg: "bg-indigo-500",
      link: "/admin/reviews",
    },
    {
      label: "Total Orders",
      value: "850",
      icon: <ShoppingCart className="text-white" size={24} />,
      bg: "bg-green-500",
      link: "/admin/orders",
    },
    {
      label: "Pending Orders",
      value: "120",
      icon: <Clock className="text-white" size={24} />,
      bg: "bg-orange-500",
      link: "/admin/orders?status=pending",
    },
    {
      label: "Cancelled Orders",
      value: "45",
      icon: <Ban className="text-white" size={24} />,
      bg: "bg-red-500",
      link: "/admin/orders?status=cancelled",
    },
    {
      label: "Revenue",
      value: "₹1,25,000",
      icon: <DollarSign className="text-white" size={24} />,
      bg: "bg-pink-500",
      link: "/admin/orders",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg hover:scale-[1.02] transition"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">{item.label}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
            <div className={`p-3 rounded-full ${item.bg}`}>
              {item.icon}
            </div>
          </Link>
        ))}
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon...</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">User Feedback</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
