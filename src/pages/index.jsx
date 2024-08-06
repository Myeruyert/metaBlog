import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Trending from "@/components/trendingCard";
import AllBlogPosts from "@/components/allBlogPosts";
import Hero from "@/components/hero/hero";
import UseEffects from "@/components/useEffect";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <AllBlogPosts />
    </>
  );
}
