import React from "react";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.orders);
  const [searchParams] = useSearchParams();

  const statusQuery = searchParams.get("status");
  const status = statusQuery
    ? statusQuery.charAt(0).toUpperCase() + statusQuery.slice(1).toLowerCase()
    : "All";

  return (
    <div className="min-h-screen bg-white ">
      <OrderTable orders={orders} initialStatusFilter={status} />
    </div>
  );
};

export default OrdersPage;
