import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SlideCard from "./slide-card";

const Hero = () => {
  return (
    <>
      <div className="hidden md:block relative w-2/3 my-24 m-auto ">
        <SlideCard
          article={{
            title: "Grid system for better Design User Interface",
            date: "2024-09-09",
            category: "Technology",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__",
          }}
        />
        <div className="flex justify-end gap-2 mt-2">
          <button className="border rounded p-2 text-[#696A75]">
            <GrPrevious />
          </button>
          <button className="border rounded p-2 text-[#696A75]">
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
