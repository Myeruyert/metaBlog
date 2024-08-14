import React, { useContext, useState } from "react";
import TrendingCard from "./trendingCard";
import { MyContext, useMyContext } from "@/provider/provider";

const trendingCardData = [
  {
    image:
      "/images/mountain.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image:
      "/images/computer.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image:
      "images/image3.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image:
    "images/image4.png",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

const Trending = () => {
  const [changeData, setChangeData] = useState(trendingCardData);
  return (
    <>
      <div className="md:w-2/3 m-auto">
        <h3 className="text-2xl font-bold px-10 md:px-0 mt-8 md:my-8">
          Trending
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
          {changeData.map((data) => (
            <TrendingCard
              image={data.image}
              category={data.category}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Trending;
