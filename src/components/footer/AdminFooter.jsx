import React from "react";

const AdminFooter = () => {
  return (
    <footer className="w-full py-4 px-6 text-center text-sm text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border-t dark:border-gray-700">
      © {new Date().getFullYear()} DealSpot Admin Panel. All rights reserved.
    </footer>
  );
};

export default AdminFooter;
