import React from "react";
import { useSelector } from "react-redux";
import AdminEntityList from "./AdminEntityList";

const AdminUsersPage = () => {
    const { users, usersLoading, usersError } = useSelector((state) => state.users);
    console.log("users page", users);
    return <AdminEntityList entityName="Users" data={users?.users || []} loading={usersLoading} error={usersError} />;
};

export default AdminUsersPage;
