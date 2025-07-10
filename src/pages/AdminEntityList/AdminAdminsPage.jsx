import React from "react";
import { useSelector } from "react-redux";
import AdminEntityList from "./AdminEntityList";

const AdminAdminsPage = () => {
  const { users, usersLoading, usersError } = useSelector((state) => state.users);

  // Filter admin users
  const admins = users?.users?.filter((u) => u.role === "admin");

  return (
    <AdminEntityList
      entityName="Admins"
      data={admins || []}
      loading={usersLoading}
      error={usersError}
    />
  );
};

export default AdminAdminsPage;
