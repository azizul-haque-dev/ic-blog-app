"use client";
import Sidebar from "@/app/Components/adminComponets/AdminSideber";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <main className="flex-1 p-4 sm:ml-[220px] transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
