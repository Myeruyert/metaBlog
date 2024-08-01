import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-max m-auto border p-3">
        <div className="flex flex-col text-base text-center gap-2">
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div className="flex my-7 gap-7 text-zinc-500">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div>
          <img src="/copyrightInfo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
