import { Check, X } from "lucide-react";

const StatusButton = ({ isActive, isEditing, onEdit, onUpdate, onCancel }) => {
    if (isEditing) {
        return (
            <div className="absolute z-10 bg-white dark:bg-gray-700 shadow border rounded p-2 space-y-2">
                <button onClick={() => onUpdate(true)} className="flex items-center gap-1 text-green-600 hover:underline text-sm">
                    <Check className="w-4 h-4" /> Set as Active
                </button>
                <button onClick={() => onUpdate(false)} className="flex items-center gap-1 text-red-600 hover:underline text-sm">
                    <X className="w-4 h-4" /> Set as Inactive
                </button>
                <button onClick={onCancel} className="flex items-center gap-1 text-gray-500 hover:underline text-sm">
                    Cancel
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={onEdit}
            className={`px-3 py-1 text-xs rounded-full font-medium transition ${
                isActive
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
        >
            {isActive ? "Active" : "Inactive"}
        </button>
    );
};

export default StatusButton;
