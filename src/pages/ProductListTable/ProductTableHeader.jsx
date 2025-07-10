import React from "react";

const ProductTableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
      <tr>
        <th className="px-4 py-3">Image</th>
        <th className="px-4 py-3">Title</th>
        <th className="px-4 py-3">Brand</th>
        <th className="px-4 py-3">Price</th>
        <th className="px-4 py-3">Stock</th>
        <th className="px-4 py-3">Category</th>
        <th className="px-4 py-3">Seller</th>
        <th className="px-4 py-3">Rating</th>
        <th className="px-4 py-3">Featured</th>
        <th className="px-4 py-3">Created At</th>
        <th className="px-4 py-3">Actions</th>
      </tr>
    </thead>
  );
};

export default ProductTableHeader;
