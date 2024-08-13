import React, { useState, useEffect, useContext } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SlideCard from "./slide-card";
import { HeroContext } from "@/provider/hero_section_provider";

const Hero = () => {
  // const [changeData, setChangeData] = useState([]);
  // const [clickNext, setClickNext] = useState(1);

  // const getArticleData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://dev.to/api/articles?page=${clickNext}&per_page=1`
  //     );
  //     const data = await response.json();
  //     setChangeData(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   getArticleData();
  // }, [clickNext]);

  const { changeData, clickNext, setClickNext } = useContext(HeroContext);

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
