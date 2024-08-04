import React from "react";

const Error = () => {
  return (
    <>
    <div className="flex items-center w-2/5 m-auto my-24">
      <h5 className="flex-1 mb-5 text-4xl font-semibold">404</h5>
        <div className="flex-1">
            <h6 className="mb-[10px] font-semibold text-2xl">Page Not Found</h6>
            <p>We're sorry, This page is unknown or does not exist the page you are looking for.</p>
        <button className="mt-[30px] py-[10px] px-4 border rounded-md bg-[#4B6BFB] text-white text-sm font-medium">Back To Home</button>
      </div>

    </div>
    </>
  );
};

export default Error;
