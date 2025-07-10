import React from "react";

const SearchInput = ({ search, setSearch, setCurrentPage }) => {
  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="Search by title, brand, seller or category..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
};

export default SearchInput;
