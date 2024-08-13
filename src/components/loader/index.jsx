import React, { useState, useContext } from "react";
import css from "../loader.module.css";
import LoaderCard from "./loaderCard";
import { HeroContext } from "@/provider/hero_section_provider";
import { MyContext } from "@/provider/provider";

const Loader = () => {
  const { changeData } = useContext(MyContext);
  return (
    <div className="md:grid md:grid-cols-3 gap-4">
      {changeData.map(() => (
        <LoaderCard />
      ))}

      {/* <div className="m-10 p-4 md:m-0 border rounded-xl">
        <div className="">
          <div
            className="w-full h-[320px] md:h-[240px] m-auto rounded-xl object-cover"
            fill={true}
            src=""
            alt=""
          />
        </div>

        <div className="mt-4 p-2">
          <button className="py-1 px-2.5 rounded-lg bg-slate-100 mb-4 font-medium"></button>
          <h5 className=" "></h5>
          <div className="">
            <div className="flex items-center gap-2">
              <img className="w-[28px] rounded-full" src="" alt="" />
              <span className="capitalize"></span>
            </div>
            <p className="text-base text-gray-400 mt-5"></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Loader;
