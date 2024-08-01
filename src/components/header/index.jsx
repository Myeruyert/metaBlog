import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex p-5 justify-between">
        <img src="./metablogLogo.png" alt="" />
        <div>
          <FaBlogger />
        </div>
        <menu>
          <IoMenuSharp />
        </menu>
      </div>
    </>
  );
};

export default Header;
