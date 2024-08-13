import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <>
      <div className="w-3/4 md:w-2/5 m-auto my-24">
        <h5 className="mb-5 text-4xl font-semibold">Contact Us</h5>
        <p
          className={`text-xl text-[#3B3C4A] mb-5 ${plus_jakarta_sans.className}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="md:flex gap-[50px] mb-10">
          <div className="flex-1 border p-4 rounded-xl mb-5 md:mb-0">
            <p className="mb-[10px] font-semibold text-2xl">Address</p>
            <p className="text-lg">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="flex-1 border p-4 rounded-xl">
            <p className="mb-[10px] font-semibold text-2xl">Contact</p>
            <p className="text-lg">313-332-8662</p>
            <span className="text-lg">info@email.com</span>
          </div>
        </div>
        <div className="bg-[#F6F6F7] pl-[25px] pr-[130px] py-7 rounded-xl">
          <div className="md:flex md:flex-col">
            <h6 className="mb-6 font-semibold text-lg">Leave a Message</h6>
            <div className="md:flex gap-7">
              <input
                className="flex-1 p-2 border rounded-md mb-5 md:mb-0"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="flex-1 p-2 border rounded-md"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <input
              className="my-5 flex-1 p-2 border rounded-md"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-[207px] md:w-full p-2 border rounded-md"
              name="Write a Message"
              id=""
              placeholder="Write a Message"
            ></textarea>
          </div>
          <button className="w-max md:w-fit mt-[30px] py-[10px] px-4 border rounded-md bg-[#4B6BFB] text-white text-sm font-medium">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
