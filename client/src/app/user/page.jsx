"use client";
import UserProtected from "../Components/auth/UserProtected";
import Dashboard from "./Dashboard";

export default function UserDashboardPage() {
  return (
    <UserProtected>
      <Dashboard />
    </UserProtected>
  );
}