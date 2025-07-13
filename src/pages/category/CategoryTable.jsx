import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableRow from "./CategoryTableRow";
import Pagination from "./Pagination";
import { deleteCategory, getCategories } from "../../redux/actions/categoryActions/categoryActions";
import ButtonLoader from "../../components/loaders/ButtonLoader";
import { showToast } from "../../utils/showToast";
import { clearCategoriesState } from "../../redux/slices/categorySlices/categorySlices";

const CategoryTable = () => {
    const { categories, categoryDelete, categoryDeleteError, categoryDeleteLoading } = useSelector(
        (state) => state.category
    );

    const [editingStatusId, setEditingStatusId] = useState(null);
    const [localCategories, setLocalCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteSingleCategory, setDeleteCategory] = useState(null);
    const itemsPerPage = 5;
    const dispatch = useDispatch();

    // Update localCategories from Redux state
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
        setLocalCategories((prev) => prev.map((cat) => (cat._id === id ? { ...cat, isActive: status } : cat)));
        setEditingStatusId(null);
    };

    const deleteCategoryHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setDeleteCategory(id);
        }
    };

    useEffect(() => {
        dispatch(getCategories);

        if (deleteSingleCategory) {
            dispatch(deleteCategory(deleteSingleCategory));
        }

        if (categoryDelete) {
            showToast(`${categoryDelete}`, "success", "category-deleted");
            dispatch(clearCategoriesState());

            const remainingItems = localCategories.length - 1;
            const isLastItemOnPage = remainingItems <= (currentPage - 1) * itemsPerPage;

            if (isLastItemOnPage && currentPage > 1) {
                setCurrentPage((prev) => prev - 1);
            }
        }
        if (categoryDeleteError) {
            showToast(`${categoryDeleteError}`, "error", "category-deleted");
            dispatch(clearCategoriesState());
        }
    }, [dispatch, deleteSingleCategory, categoryDelete, currentPage, localCategories.length, categoryDeleteError]);

    return (
        <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">All Categories</h2>
                <Link
                    to="/admin/category/create"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    <PlusCircle className="w-5 h-5" /> Create Category
                </Link>
            </div>

            {categoryDeleteLoading ? (
                <ButtonLoader size={6} color="red" message="deleting" />
            ) : (
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
                                    deleteCategoryHandler={deleteCategoryHandler}
                                    categoryDeleteLoading={categoryDeleteLoading}
                                />
                            ))}
                            {!currentItems.length && (
                                <tr>
                                    <td colSpan="8" className="text-center py-6 text-gray-500">
                                        No categories found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

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
