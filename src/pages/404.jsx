import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="md:flex md:divide-x items-center w-3/5 md:w-2/5 m-auto my-24">
        <h5 className="mb-5 md:pr-20 text-4xl font-semibold text-7xl">404</h5>
        <div className="md:pl-20">
          <h6 className="mb-[10px] font-semibold text-2xl">Page Not Found</h6>
          <p className="text-justify">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="mt-[30px] py-[10px] px-4 border rounded-md bg-[#4B6BFB] text-white text-sm font-medium">
            <Link href="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
