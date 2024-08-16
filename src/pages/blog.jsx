import AllBlogPosts from "@/components/allBlogPosts";
import React from "react";

const Blog = ({ posts }) => {
  return (
    <>
      <AllBlogPosts posts={posts} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { page, per_page } = context.query;
  const res = await fetch(`https://dev.to/api/articles?page=1&per_page=9`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
export default Blog;
