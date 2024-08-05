import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

const Header = () => {
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
            <li>
              <Link href="/article">Article</Link>
            </li>
            <li>
              <Link href="/error">Error</Link>
            </li>
          </ul>
        </menu>
        <div className="md:hidden">
          <IoMenuSharp />
        </div>
        <div className="hidden md:flex">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
