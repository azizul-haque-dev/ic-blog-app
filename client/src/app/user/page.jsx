import UserProtected from "../Components/auth/UserProtected";
import Dashboard from "./Dashboard";

export default async function UserDashboardPage() {
  return (
    <UserProtected>
      <Dashboard />
    </UserProtected>
  );
}
