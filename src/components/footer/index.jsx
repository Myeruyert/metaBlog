import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-max m-auto border p-3">
        <div className="flex flex-col">
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
