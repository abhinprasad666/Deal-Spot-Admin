import React, { useEffect } from "react";
import OrderTable from "./OrderTable";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllorders } from "../../redux/actions/ordersActions/ordersActions";

const OrdersPage = () => {
  const { orders,ordersLoading } = useSelector((state) => state.orders);
  const [searchParams] = useSearchParams();
  const dispatch=useDispatch()

    useEffect(() => {
    
        dispatch(getAllorders());
       }
    , [dispatch,]);

  const statusQuery = searchParams.get("status");
  const status = statusQuery
    ? statusQuery.charAt(0).toUpperCase() + statusQuery.slice(1).toLowerCase()
    : "All";

  return (
    <div className="min-h-screen bg-white ">
      <OrderTable orders={orders} ordersLoading={ordersLoading} initialStatusFilter={status} />
    </div>
  );
};

export default OrdersPage;
