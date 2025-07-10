import React from "react";
import { Pencil, UserCheck, XCircle } from "lucide-react";

const EditPopupModal = ({ editingField, setEditingField, handleChange, handleSave }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-sm p-6 relative">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Pencil className="w-5 h-5 text-blue-500" />
                    Change {editingField.field}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Update <span className="font-medium text-blue-600">{editingField.name}</span>'s{" "}
                    <span className="capitalize">{editingField.field}</span>
                </p>

                <select
                    value={editingField.value}
                    onChange={handleChange}
                    className="w-full p-2 border rounded dark:bg-gray-900 dark:text-white"
                >
                    {editingField.field === "role" ? (
                        <>
                            <option value="admin">Admin</option>
                            <option value="seller">Seller</option>
                            <option value="customer">Customer</option>
                        </>
                    ) : (
                        <>
                            <option value="active">Active</option>
                            <option value="blocked">Blocked</option>
                            <option value="deleted">Deleted</option>
                        </>
                    )}
                </select>

                <div className="flex justify-end gap-2 mt-5">
                    <button
                        onClick={() => setEditingField(null)}
                        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        <XCircle className="w-4 h-4" /> Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <UserCheck className="w-4 h-4" /> Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPopupModal;
