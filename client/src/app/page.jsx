import Card from "@/app/Components/card";
import { posts } from "./damyData/post-damyData";
import Button from "./Components/button";
import Footer from "./Components/Footer";

//DANY DATA PORE DATA PAWA GELE
export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
          Latest Posts
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </div>
        <Button />
      </main>
      <Footer />
    </>
  );
}
