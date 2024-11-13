import React, { useContext, useState } from "react";
import TrendingCard from "./trendingCard";
import { MyContext, useMyContext } from "@/provider/provider";
import Link from "next/link";

const trendingCardData = [
  {
    image: "/images/mountain.png",
    category: "Article",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "/images/computer.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "images/image3.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "images/image4.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

const Trending = () => {
  // const [changeData, setChangeData] = useState(trendingCardData);
  const { changeData } = useMyContext();

  return (
    <>
      <div className="md:w-2/3 m-auto">
        <h3 className="text-2xl font-bold px-10 md:px-0 mt-8 md:my-8">
          Trending
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
          {changeData?.slice(2, 6).map((data) => (
            <TrendingCard
              image={
                data.cover_image ? data.cover_image : "/images/mountain.png"
              }
              category={trendingCardData[0].category}
              title={data.title}
              id={data.id}
              tags={data.tag_list}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Trending;
