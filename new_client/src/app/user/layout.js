import { getUser } from "@/actions/user.action";
import Sidebar from "@/app/Components/userComponents/Sideber";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const { user } = await getUser();
  console.log(user, "from user layout");
  if (!user) return redirect("/login");
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <main className="flex-1 p-4 sm:ml-[220px] transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
