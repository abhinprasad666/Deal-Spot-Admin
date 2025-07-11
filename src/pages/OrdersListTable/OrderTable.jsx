import { useState } from "react";
import OrderRow from "./OrderRow";
import { useNavigate } from "react-router-dom";

const statusOptions = ["All", "Pending", "Confirmed", "Shipped", "Delivered", "Cancelled", "Refunded"];

const OrderTable = ({ orders, initialStatusFilter = "All" }) => {
  const itemsPerPage = 5;
  const allOrders = orders?.orders || [];

  const [expandedRows, setExpandedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState(initialStatusFilter);

  const navigate = useNavigate();

  const toggleAddress = (id) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));
  };

  const filteredOrders =
    statusFilter === "All"
      ? allOrders
      : allOrders.filter((order) => order.status === statusFilter);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 overflow-x-auto dark:bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Order Summary</h2>

        <select
          value={statusFilter}
          onChange={(e) => {
            const selected = e.target.value;
            setStatusFilter(selected);
            setCurrentPage(1);
            navigate(
              `/admin/orders${selected !== "All" ? `?status=${selected.toLowerCase()}` : ""}`
            );
          }}
          className="border px-3 py-1 rounded text-sm"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All Statuses" : status}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-[1000px]">
        <div className="grid grid-cols-12 bg-gray-100 font-semibold text-sm p-2 rounded-t dark:bg-gray-700 mt-5">
          <div className="col-span-2">User</div>
          <div className="col-span-3">Products</div>
          <div className="col-span-1">Payment</div>
          <div className="col-span-1">Total</div>
          <div className="col-span-1">Discount</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Paid At</div>
          <div className="col-span-1">Address</div>
          <div className="col-span-1">Actions</div>
        </div>

        {paginatedOrders.map((order) => (
          <OrderRow
            key={order._id}
            order={order}
            expandedRows={expandedRows}
            toggleAddress={toggleAddress}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center items-center gap-2 text-sm">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
