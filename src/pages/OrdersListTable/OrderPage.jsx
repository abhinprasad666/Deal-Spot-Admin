import React from "react";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";

const OrdersPage = () => {
      const { orders} = useSelector((state) => state.orders);
      console.log("orders page",orders)
  return (
    <div className="min-h-screen bg-white">
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
