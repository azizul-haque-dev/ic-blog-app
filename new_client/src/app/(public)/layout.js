import { AuthProvider } from "@/context/AuthContext";
import Link from "next/link";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";


export default function PublicLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)"
          }}
        />
        {/* Foreground Content */}
        <div className="relative z-10">
          <Navber />

          {children}
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
