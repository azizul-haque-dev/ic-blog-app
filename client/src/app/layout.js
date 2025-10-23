"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Navber";
import { usePathname } from "next/navigation";

import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRout = pathname.startsWith("/admin");
  const isUserRout = pathname.startsWith("/user");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       
       <AuthProvider>
         <div className="min-h-screen w-full relative overflow-hidden">
          {/* Radial Gradient Background from Bottom */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
            }}
          />
          {/* Foreground Content */}
          <div className="relative z-10">
            {!isUserRout && !isAdminRout && <Navber />}

            {children}
          </div>
        </div>
       </AuthProvider>
      </body>
    </html>
  );
}
