import React, { useState } from "react";
import { User2 } from "lucide-react";
import UsersTable from "./UsersTable";
import EditPopupModal from "./EditPopupModal";

const AdminEntityList = ({ entityName, data, loading, error }) => {
    const [editingField, setEditingField] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const allEntities = data || [];
    const totalEntities = allEntities.length;
    const totalPages = Math.ceil(totalEntities / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const currentEntities = allEntities.slice(startIndex, endIndex);

    const handleOpenEdit = (userId, field, currentValue) => {
        const entity = allEntities.find((u) => u._id === userId);
        setEditingField({ id: userId, field, value: currentValue, name: entity?.name });
    };

    const handleChange = (e) => {
        setEditingField((prev) => ({ ...prev, value: e.target.value }));
    };

    const handleSave = () => {
        console.log("Dispatch update for", editingField); // Add dispatch
        setEditingField(null);
    };

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <User2 className="text-blue-500" /> All {entityName}
            </h2>

            {loading ? (
                <p className="text-center py-6">Loading {entityName}...</p>
            ) : error ? (
                <p className="text-center text-red-500 py-6">Error: {error}</p>
            ) : (
                <>
                    <UsersTable
                        users={currentEntities}
                        handleOpenEdit={handleOpenEdit}
                        startIndex={startIndex}
                        endIndex={endIndex}
                        totalUsers={totalEntities}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                        entityName={entityName} // ✅ fixed: passed properly
                    />

                    {editingField && (
                        <EditPopupModal
                            editingField={editingField}
                            setEditingField={setEditingField}
                            handleChange={handleChange}
                            handleSave={handleSave}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default AdminEntityList;
