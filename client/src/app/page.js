import Image from "next/image";
import Navber from "./Components/Navber";
import HeroSection from "./Components/HeroSection";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BlogPage />
    </>
  );
}
