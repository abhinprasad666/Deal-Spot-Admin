import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";
import PaginationControls from "./PaginationControls";

const ProductListTable = () => {
  const { products } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [expandedProductId, setExpandedProductId] = useState(null);
  const productsPerPage = 5;
    const [productId, setProductId] = useState(null);

  const filteredProducts =
    products?.products.filter((p) => {
      const q = search.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.category?.name?.toLowerCase().includes(q) ||
        p.seller?.name?.toLowerCase().includes(q)
      );
    }) || [];

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const handleEdit = (product) => {
    console.log("Edit clicked:", product);
  };

  const handleDelete = (productId) => {
    console.log("Delete clicked:", productId);
  };

  const toggleReviews = (productId) => {
    setExpandedProductId(prev => (prev === productId ? null : productId));
   setProductId(productId)
  };

  return (
    <div className="p-4">
      <SearchInput search={search} setSearch={setSearch} setCurrentPage={setCurrentPage} />

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center md:hidden">
        Scroll sideways to view all columns ⟶
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm text-center">
          <ProductTableHeader />
          <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-700">
            {currentProducts.map((product) => (
              <ProductTableRow
                key={product._id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isExpanded={expandedProductId === product._id}
                toggleReviews={toggleReviews}
                productId={productId}
              />
            ))}
          </tbody>
        </table>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListTable;
