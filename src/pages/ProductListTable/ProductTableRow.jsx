import React from "react";
import { Star, StarOff, Pencil, Trash2, MessageCircle } from "lucide-react";

// Dummy Reviews
const dummyReviews = [
    { id: 1, user: "Abi", rating: 4, comment: "Very good product!" },
    { id: 2, user: "Rahul", rating: 5, comment: "Loved it!" },
];

const ProductTableRow = ({ product, onEdit, onDelete, isExpanded, toggleReviews }) => {
    return (
        <>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3">
                    <img
                        src={product.image}
                        onError={(e) => (e.target.src = "/fallback.png")}
                        alt={product.title}
                        className="w-14 h-14 object-cover rounded mx-auto"
                    />
                </td>
                <td
                    className="px-4 py-3 font-medium text-gray-800 dark:text-gray-100 truncate max-w-[200px]"
                    title={product.title}
                >
                    {product.title}
                </td>
                <td className="px-4 py-3">{product.brand}</td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">₹{product.price}</td>
                <td className="px-4 py-3">
                    {product.stock > 0 ? (
                        <span className="text-green-600 dark:text-green-400">{product.stock}</span>
                    ) : (
                        <span className="text-red-600 dark:text-red-400">Out of Stock</span>
                    )}
                </td>
                <td className="px-4 py-3">{product.category?.name || "N/A"}</td>
                <td className="px-4 py-3">{product.seller?.name || "N/A"}</td>
                <td className="px-4 py-3">{product.rating || 0} ★</td>
                <td className="px-4 py-3 flex justify-center">
                    {product.isFeatured ? (
                        <Star className="text-yellow-500" size={20} />
                    ) : (
                        <StarOff className="text-gray-400" size={20} />
                    )}
                </td>
                <td className="px-4 py-3">
                    {new Date(product.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </td>
                <td className="px-4 py-3 flex justify-center space-x-2">
                    <button onClick={() => onEdit(product)} className="text-blue-600 hover:text-blue-800" title="Edit">
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(product._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                    >
                        <Trash2 size={18} />
                    </button>
                    <button
                        onClick={() => toggleReviews(product._id)}
                        className="text-purple-600 hover:text-purple-800"
                        title="View Reviews"
                    >
                        <MessageCircle size={18} />
                    </button>
                </td>
            </tr>

            {/* Collapsible Reviews Section */}
            {isExpanded && (
                <tr>
                    <td colSpan="11" className="bg-gray-50 dark:bg-gray-800 px-6 py-4 text-left">
                        <div className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                            <h4 className="font-semibold mb-2">Reviews:</h4>
                            {dummyReviews.length > 0 ? (
                                dummyReviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="border border-gray-300 dark:border-gray-600 rounded p-2"
                                    >
                                        <p className="font-medium">{review.user}</p>
                                        <p className="text-yellow-500">★ {review.rating}</p>
                                        <p>{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="italic text-gray-400">No reviews yet.</p>
                            )}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ProductTableRow;
