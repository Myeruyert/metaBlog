import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./blogCard";
import Category from "./categories";
import { useMyContext } from "@/provider/provider";
import Loader from "../loader";

const allCategories = [
  { category: "All" },
  { category: "Design" },
  { category: "Travel" },
  { category: "Fashion" },
  { category: "Technology" },
  { category: "Branding" },
];

const AllBlogPosts = ({ posts }) => {
  const {
    count,
    setCount,
    selectedCategory,
    handleChange,
    isLoading,
    searchValue,
  } = useMyContext();

  const filteredArticles = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="md:w-2/3 my-24 m-auto">
        <h3 className="text-2xl font-bold px-10 md:px-0 mt-8">All Blog Post</h3>
        <div className="hidden md:flex justify-between md:my-8 text-xs font-bold">
          <ul className="flex gap-5">
            {allCategories.map((cat) => (
              <Category
                selectedCategory={selectedCategory}
                category={cat.category}
                handleChange={handleChange}
              />
            ))}
          </ul>
          <ul>
            <li>View All</li>
          </ul>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4">
          {isLoading
            ? filteredArticles?.map(() => <Loader />)
            : filteredArticles?.map((data) => (
                <BlogCard
                  image={
                    data.cover_image ? data.cover_image : "/images/mountain.png"
                  }
                  articleCategory={data.type_of}
                  title={data.title}
                  date={data.published_timestamp}
                  profileImage={data.user.profile_image}
                  username={data.user.username}
                  id={data.id}
                />
              ))}

          {/* {posts.map((data) => (
            <BlogCard
              image={
                data.cover_image ? data.cover_image : "/images/mountain.png"
              }
              articleCategory={data.type_of}
              title={data.title}
              date={data.published_timestamp}
              profileImage={data.user.profile_image}
              username={data.user.username}
              id={data.id}
            />
          ))} */}
        </div>
        <div className="w-fit m-auto mt-24">
          <button
            className="border rounded py-3 px-5 text-[#696A75] font-medium"
            onClick={() => {
              setCount(count + 6);
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default AllBlogPosts;
