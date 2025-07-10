import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableRow from "./CategoryTableRow";
import Pagination from "./Pagination";

const CategoryTable = () => {
    const { categories } = useSelector((state) => state.category);
    const [editingStatusId, setEditingStatusId] = useState(null);
    const [localCategories, setLocalCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        if (categories?.categories) {
            setLocalCategories(categories.categories);
        }
    }, [categories]);

    const totalItems = localCategories.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = localCategories.slice(startIndex, startIndex + itemsPerPage);

    const updateStatus = (id, status) => {
        setLocalCategories((prev) =>
            prev.map((cat) =>
                cat._id === id ? { ...cat, isActive: status } : cat
            )
        );
        setEditingStatusId(null);
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">All Categories</h2>
                <Link
                    to="/admin/categories/create"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    <PlusCircle className="w-5 h-5" /> Create Category
                </Link>
            </div>

            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded shadow">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                    <CategoryTableHeader />
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {currentItems.map((category) => (
                            <CategoryTableRow
                                key={category._id}
                                category={category}
                                isEditing={editingStatusId === category._id}
                                onEditStatus={setEditingStatusId}
                                onUpdateStatus={updateStatus}
                                onCancelEdit={() => setEditingStatusId(null)}
                            />
                        ))}
                        {!currentItems.length && (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No categories found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    startIndex={startIndex}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                />
            )}
        </div>
    );
};

export default CategoryTable;
