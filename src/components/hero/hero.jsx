import React, { useState, useEffect, useContext } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SlideCard from "./slide-card";
import { useHeroContext } from "@/provider/hero_section_provider";
import { EmblaCarousel } from "../emblaCarousel";

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

  let { changeData, currentIndex, setCurrentIndex } = useHeroContext();

  return (
    <>
      <div className="hidden md:block relative w-2/3 my-24 m-auto overflow-hidden">
        <div
          className="flex transition-all ease-out duration-150"
          // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* {changeData.map((data, i) => (
            <SlideCard
              category={data.type_of}
              title={data.title}
              date={data.readable_publish_date}
              imgUrl={data.social_image}
              currentIndex={currentIndex}
              index={i}
            />
          ))} */}
          <EmblaCarousel 
          />
        </div>

        {/* <SlideCard
          category={changeData[clickNext]?.type_of}
          title={changeData[clickNext]?.title}
          date={changeData[clickNext]?.readable_publish_date}
          imgUrl={changeData[clickNext]?.social_image}
        /> */}

        {/* <div className="flex justify-end gap-2 mt-2">
          <button
            className="border rounded p-2 text-[#696A75]"
            onClick={() => {
              currentIndex--;
              if (currentIndex < 0) currentIndex = changeData.length - 1;
              setCurrentIndex(currentIndex);

              console.log("prev");
            }}
          >
            <GrPrevious />
          </button>
          <button
            className="border rounded p-2 text-[#696A75]"
            onClick={() => {
              currentIndex++;
              if (currentIndex === changeData.length) currentIndex = 0;
              setCurrentIndex(currentIndex);
            }}
          >
            <GrNext />
          </button>
        </div> */}
        
      </div>
    </>
  );
};

export default Hero;
