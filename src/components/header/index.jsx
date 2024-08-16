import React, { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Work_Sans } from "next/font/google";
import { useMyContext } from "@/provider/provider";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { useRouter } from "next/router";

// const menuLists = [{ name: "Home" }, { name: "Blog" }, { name: "Contact" }];
const work_sans = Work_Sans({
  subsets: ["latin"],
});

const Header = ({ search }) => {
  const { setSearchValue } = useMyContext();
  const router = useRouter();

  const searchHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    router.push("/contact");
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center p-5 justify-between md:w-2/3 m-auto ${work_sans.className}`}
    >
      <img
        className="w-[135px] md:w-[158px]"
        src="/images/metabloglogo.png"
        alt=""
      />
      <menu>
        <ul className=" hidden gap-10 text-base text-gray-700 md:flex">
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
        <button onClick={toggleMenu} className="p-2 text-gray-700 md:hidden">
          <IoMenuSharp size={24} />
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 z-10 flex justify-end w-full h-screen bg-gray-200 z-20">
            <div className="w-10/12 p-5 bg-white ">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/images/metabloglogo.png"
                  alt=""
                  className="w-[150px]"
                />
                <button onClick={toggleMenu} className="text-gray-700 ">
                  <LiaTimesSolid color="#333333" size={24} />
                </button>
              </div>
              <ul className="mb-8 space-y-4">
                {/* {menuLists.map((title) => (
                    <li>
                      <a className="block text-gray-700 " onClick={handleClose}>
                        {title.name}
                      </a>
                    </li>
                  ))} */}
                <li>
                  <a href="/" className="block text-gray-700 ">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/blog" className="block text-gray-700 ">
                    Blog
                  </a>
                </li>

                <li>
                  <a className="block text-gray-700 " onClick={handleClose}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
            onChange={searchHandleChange}
            value={search}
          />
        </label>
      </div>
    </div>
  );
};

export default Header;
