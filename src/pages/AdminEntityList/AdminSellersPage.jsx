import React from "react";
import { useSelector } from "react-redux";
import AdminEntityList from "./AdminEntityList";

const AdminSellersPage = () => {
    const { sellers, sellersLoading, sellersError } = useSelector((state) => state.sellers);

    return (
        <AdminEntityList entityName="Sellers" data={sellers?.sellers || []} loading={sellersLoading} error={sellersError} />
    );
};

export default AdminSellersPage;
