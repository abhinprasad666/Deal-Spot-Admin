import React from "react";
import { Link } from "react-router-dom";
import { Fingerprint, BadgeCheck, ShieldCheck, Eye } from "lucide-react";

const statusColors = {
    active: "text-green-600",
    blocked: "text-orange-500",
    deleted: "text-red-500",
};

const roleStyles = {
    admin: "bg-red-100 text-red-600",
    seller: "bg-teal-100 text-teal-600",
    customer: "bg-blue-100 text-blue-600",
};

const UsersTable = ({
    users,
    handleOpenEdit,
    startIndex,
    endIndex,
    totalUsers,
    currentPage,
    setCurrentPage,
    totalPages,
    entityName,
}) => {
    const entityPath = (entityName || "users").toLowerCase();

    return (
        <>
            <div className="overflow-x-auto rounded shadow bg-white dark:bg-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                    <thead className="bg-gray-100 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300">
                        <tr className="h-12">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Profile</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {users.map((user) => (
                            <tr key={user._id} className="h-14 align-middle">
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <Fingerprint className="w-4 h-4 text-gray-500" />
                                        <span className="truncate max-w-[140px]">{user._id}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        {user.profilePic ? (
                                            <img
                                                src={user.profilePic}
                                                alt={user.name}
                                                className="w-8 h-8 rounded-full object-cover border"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                                {user.name?.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                        <span>{user.name}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`flex items-center gap-1 font-medium ${statusColors[user.status]}`}>
                                            <BadgeCheck className="w-4 h-4" />
                                            {user.status}
                                        </div>
                                        <button
                                            className="text-xs text-blue-500 hover:underline"
                                            onClick={() => handleOpenEdit(user._id, "status", user.status)}
                                        >
                                            Change
                                        </button>
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                                                roleStyles[user.role]
                                            }`}
                                            style={{ minWidth: "85px" }}
                                        >
                                            <ShieldCheck className="w-4 h-4" />
                                            {user.role}
                                        </span>
                                        <button
                                            className="text-xs text-blue-500 hover:underline"
                                            onClick={() => handleOpenEdit(user._id, "role", user.role)}
                                        >
                                            Change
                                        </button>
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <Link
                                        to={`/admin/${entityPath}/${user._id}`}
                                        className="inline-flex items-center text-blue-500 hover:underline"
                                    >
                                        <Eye className="w-4 h-4 mr-1" /> View Detail
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-700 dark:text-gray-300">
                <span>
                    Showing {startIndex + 1} - {Math.min(endIndex, totalUsers)} of {totalUsers} {entityPath}
                </span>
                <div className="space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default UsersTable;
