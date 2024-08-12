import React, { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SlideCard from "./slide-card";

const Hero = () => {
  const [changeData, setChangeData] = useState([]);
  const [clickNext, setClickNext] = useState(1);

  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${clickNext}`
    );
    const data = await response.json();
    setChangeData(data);
    console.log("data", data);
  };

  useEffect(() => {
    getArticleData();
  }, [clickNext]);

  return (
    <>
      <div className="hidden md:block relative w-2/3 my-24 m-auto ">
        {changeData.map((data) => (
          <SlideCard
            category={data.type_of}
            title={data.title}
            date={data.readable_publish_date}
            imgUrl={data.social_image}
          />
        ))}

        <div className="flex justify-end gap-2 mt-2">
          <button
            className="border rounded p-2 text-[#696A75]"
            onClick={() => {
              if (clickNext > 0) {
                setClickNext(clickNext - 1);
              }
              console.log("prev");
            }}
          >
            <GrPrevious />
          </button>
          <button
            className="border rounded p-2 text-[#696A75]"
            onClick={() => {
              setClickNext(clickNext + 1);
            }}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
