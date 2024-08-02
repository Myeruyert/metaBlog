import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Trending from "@/components/trendingCard";
import AllBlogPosts from "@/components/allBlogPosts";
import Hero from "@/components/hero/hero";


export default function Home() {
  return (
    <>
      <Hero 
        articleType="Technology"
        title="Grid system for better Design User Interface"
        date="August 20, 2022"
      />
      <Trending />
      <AllBlogPosts />
    </>
  );
}
