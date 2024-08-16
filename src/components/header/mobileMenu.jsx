import Link from "next/link";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu3Fill } from "react-icons/ri";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button onClick={toggleMenu} className="p-2 text-gray-700 md:hidden">
        <RiMenu3Fill size={24} />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 flex justify-end w-full h-screen bg-gray-200 ">
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
              <li>
                <Link href="/" className="block text-gray-700 ">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/blog" className="block text-gray-700 ">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="block text-gray-700 ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
