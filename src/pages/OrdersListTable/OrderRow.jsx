import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import OrderProductList from "./OrderProductList";
import ShippingAddress from "./ShippingAddress";
import StatusDropdown from "./StatusDropdown";

const OrderRow = ({ order, expandedRows, toggleAddress }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [localStatus, setLocalStatus] = useState(order.status);

    const handleUpdate = () => {
        alert(`Status updated to: ${localStatus}`);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setLocalStatus(order.status);
        setIsEditing(false);
    };

    return (
        <div className="grid grid-cols-12 items-start gap-2 border-b border-gray-200 p-2 text-sm dark:hover hover:bg-gray-800 transition ">
            {/* User */}
            <div className="col-span-2">
                <div className="font-medium">{order.userId.name}</div>
                <div className="text-xs text-gray-500">{order.userId.email}</div>
            </div>

            {/* Products */}
            <div className="col-span-3 space-y-2">
                <OrderProductList items={order.cartItems} />
            </div>

            {/* Payment */}
            <div className="col-span-1">
                <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                        order.paymentMethod === "onlinePayment"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                    {order.paymentMethod}
                </span>
            </div>

            {/* Price */}
            <div className="col-span-1 font-semibold">₹{order.totalPrice}</div>

            {/* Discount */}
            <div className="col-span-1 text-red-500 font-medium">-₹{order.totalDiscount}</div>

            {/* Status */}
            <div className="col-span-1 space-y-1">
                {!isEditing ? (
                    <>
                        <span
                            className={`px-2 py-1 text-xs rounded font-medium block ${
                                order.status === "Delivered"
                                    ? "bg-green-100 text-green-700"
                                    : order.status === "Cancelled"
                                    ? "bg-red-100 text-red-600"
                                    : "bg-blue-100 text-blue-700"
                            }`}
                        >
                            {order.status}
                        </span>
                        <button onClick={() => setIsEditing(true)} className="text-xs text-blue-600 underline">
                            Status Change
                        </button>
                    </>
                ) : (
                    <>
                        <StatusDropdown
                            value={localStatus}
                            onChange={setLocalStatus}
                            options={["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled", "Refunded"]}
                        />
                        <div className="flex gap-2 mt-1">
                            <button onClick={handleUpdate} className="text-green-600 text-xs underline">
                                Update
                            </button>
                            <button onClick={handleCancel} className="text-gray-500 text-xs underline">
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Paid At */}
            <div className="col-span-1 text-xs">{order.paidAt ? new Date(order.paidAt).toLocaleString() : "Not Paid"}</div>

            {/* Address */}
            <div className="col-span-1">
                <button
                    onClick={() => toggleAddress(order._id)}
                    className="flex items-center text-blue-600 hover:underline"
                >
                    {expandedRows.includes(order._id) ? (
                        <>
                            Hide <FaChevronUp className="ml-1" />
                        </>
                    ) : (
                        <>
                            Show <FaChevronDown className="ml-1" />
                        </>
                    )}
                </button>

                {expandedRows.includes(order._id) && <ShippingAddress address={order.shippingAddress} />}
            </div>

            {/* Actions */}
            <div className="col-span-1">
                <button onClick={() => alert("Delete clicked")} className="text-red-500 hover:text-red-700 transition">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default OrderRow;
