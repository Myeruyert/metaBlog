import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import SearchBox from "./searchBox";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

const Header = ({ search }) => {
  return (
    <>
      <div
        className={`flex items-center p-5 justify-between md:w-2/3 m-auto ${work_sans.className}`}
      >
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
        <SearchBox search={search} />
      </div>
    </>
  );
};

export default Header;
