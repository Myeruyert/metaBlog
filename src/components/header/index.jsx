import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex p-5 justify-between md:w-3/5 m-auto">
        <img
          className="w-[135px] md:w-[158px]"
          src="/images/metabloglogo.png"
          alt=""
        />
        <menu>
          <ul className="hidden gap-10 text-base text-gray-700 md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </menu>
        <div className="md:hidden">
          <IoMenuSharp />
        </div>
        <div className="hidden md:flex">
          <input
            className="bg-zinc-100 rounded"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
