import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineFileImage } from "react-icons/ai";

const LoaderCard = () => {
  return (
    <div
      role="status"
      className="max-w-md m-auto p-4 border border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-300 my-[25px]"
    >
      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-lg dark:bg-gray-700">
      <AiOutlineFileImage className="text-[35px]" />
         
      </div>
      <div class="py-1 px-2.5 rounded-lg h-[30px] bg-gray-200 dark:bg-gray-700 w-24 mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div class="flex items-center mt-4">
        <FaUserCircle className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" />
        <div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default LoaderCard;
