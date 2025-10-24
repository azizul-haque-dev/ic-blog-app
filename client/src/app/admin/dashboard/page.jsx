

import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminProtected from "../../Components/auth/AdminProtected";

export default function AdminDashboardPage() {
  return (
    <AdminProtected>
      <AdminDashboard />
    </AdminProtected>
  );
}
