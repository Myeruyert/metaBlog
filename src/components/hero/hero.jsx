import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const Hero = ({articleType, title, date}) => {
  return (
    <>
      <div className="hidden md:block relative w-3/5 m-auto my-24">
        <div className="absolute ml-3 mt-[335px] z-10 p-10 bg-white rounded-xl w-[45%]">
          <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
            {articleType}
          </button>
          <h1 className="text-4xl font-semibold pr-15">{title}</h1>
          <p className="text-base text-gray-400 mt-5">{date}</p>
        </div>
          <div className="rounded-xl bg-cover bg-no-repeat bg-center h-[600px] bg-[url('https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__')] brightness-[0.75]">
          </div>
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
