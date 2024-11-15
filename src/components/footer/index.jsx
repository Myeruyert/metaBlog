import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Work_Sans } from "next/font/google";
import Link from "next/link";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className={`md:bg-[#F6F6F7] md:py-16  ${work_sans.className}`}>
        <div className="w-2/3 m-auto p-3 flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="w-1/4 hidden md:block">
            <h6 className="mb-3 text-lg font-semibold text-[#181A2A]">About</h6>
            <p className="mb-6 text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="text-[#3B3C4A]">
              <b>Email : </b>info@jstemplate.net
            </p>
            <p className="text-[#3B3C4A]">
              <b>Phone : </b> 880 123 456 789
            </p>
          </div>
         
            <ul className="flex flex-col text-base text-center md:text-left gap-2">
            <li > <Link href="/">Home</Link> </li>
            <li ><Link href="/blog">Blog</Link></li>
            <li ><Link href="/contact">Contact</Link></li>
            </ul>
          
          <div className="flex my-7 md:my-0 gap-7 text-zinc-500 w-fill">
            <FaFacebook className="hover:text-[#1877F2] hover:scale-125"/>
            <FaTwitter className="hover:text-[#1DA1F2] hover:scale-125"/>
            <FaInstagram className="instaLogo hover:scale-125"/>
            <FaLinkedin className="hover:text-[#0077B5] hover:scale-125"/>
          </div>
          <div></div>
        </div>
        <div className="w-2/3 m-auto flex justify-between text-[#3B3C4A] font-normal my-[25px]">
          <img className="w-[230px]" src="/images/copyrightInfo.png" alt="" />
          <ul className="hidden md:flex gap-8">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
