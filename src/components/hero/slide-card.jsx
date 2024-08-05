import React from "react";

const SlideCard = ({ article }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-3 left-3 z-10 p-10 bg-white rounded-xl w-[50%]">
        <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
          {article.category}
        </button>
        <h1 className="text-4xl font-semibold pr-15">{article.title}</h1>
        <p className="text-base text-gray-400 mt-5">{article.date}</p>
      </div>
      <img
        src={article.imgUrl}
        className={`rounded-xl w-full object-cover h-[800px] brightness-[0.6]`}
        fill={true}
      />
    </div>
  );
};

export default SlideCard;
