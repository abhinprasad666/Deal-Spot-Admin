import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AdminWelcome = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-pink-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.8 }}
          className="inline-block mb-6"
        >
          <Sparkles size={64} className="text-yellow-300 drop-shadow-xl animate-pulse" />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          Welcome, Admin 🎉
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/90 dark:text-gray-300 mb-8"
        >
          You’re now logged into the DealSpot Admin Panel. Get ready to manage products, orders, and more.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Go to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminWelcome;
