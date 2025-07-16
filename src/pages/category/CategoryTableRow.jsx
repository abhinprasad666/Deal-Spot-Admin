import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";
import StatusButton from "./StatusButton";
import ButtonLoader from "../../components/loaders/ButtonLoader";

const CategoryTableRow = ({
  category,
  isEditing,
  onEditStatus,
  onUpdateStatus,
  onCancelEdit,
  deleteCategoryHandler,
  categoryDeleteLoading,

  
}) => {

    console.log("my catecory label",category.labal)
  return (
    <tr key={category._id} className="h-14">
      <td className="px-4 py-2">
        <img
          src={category.image}
          alt={category.name}
          className="w-12 h-12 rounded object-cover border"
        />
      </td>
      <td className="px-4 py-2">{category.name}</td>

      {/* New Label Field */}
      <td className="px-4 py-2 text-gray-500">{category.labal}</td>

      <td className="px-4 py-2 relative">
        <StatusButton
          isActive={category.isActive}
          isEditing={isEditing}
          onEdit={() => onEditStatus(category._id)}
          onUpdate={(status) => onUpdateStatus(category._id, status)}
          onCancel={onCancelEdit}
        />
      </td>
      <td className="px-4 py-2">{moment(category.createdAt).format("YYYY-MM-DD")}</td>
      <td className="px-4 py-2">{moment(category.updatedAt).format("YYYY-MM-DD")}</td>
      <td className="px-4 py-2 truncate max-w-[140px] text-gray-500">{category._id}</td>
      <td className="px-4 py-2 text-center">
        <div className="flex justify-center gap-3">
          <Link to={`/admin/update/category/${category._id}`} className="text-blue-600 hover:text-blue-800">
            <Pencil className="w-5 h-5" />
          </Link>
          <button onClick={() => deleteCategoryHandler(category._id)} className="text-red-600 hover:text-red-800">
            <Trash2 className="w-5 h-5 " />
            
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
