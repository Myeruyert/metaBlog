import React, { useState, useContext } from "react";
import css from "../loader.module.css";
import LoaderCard from "./loaderCard";
import { MyContext } from "@/provider/provider";

const Loader = () => {
  const { changeData } = useContext(MyContext);
  return (
    <div className="">
      {/* <div className={css.loader}/> */}
      {changeData.map(() => (
        <LoaderCard />
      ))}
    </div>
  );
};

export default Loader;
