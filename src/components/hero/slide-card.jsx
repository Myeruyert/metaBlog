import React from "react";

const SlideCard = ({
  category,
  title,
  date,
  imgUrl,
  tags,
  index,
  currentIndex,
  scrollPrev,
}) => {
  return (
    <div className={`relative min-w-full`}>
      <div className="absolute bottom-3 left-3 z-10 p-10 bg-white rounded-xl w-[50%]">
        <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
          {tags[0] ? tags[0] : category}
        </button>
        <h1 className="text-4xl font-semibold pr-15">{title}</h1>
        <p className="text-base text-gray-400 mt-5">{date}</p>
      </div>
      <img
        src={imgUrl}
        className={`rounded-xl w-full object-cover h-[800px] brightness-[0.6]`}
        fill={true}
      />
    </div>
  );
};

export default SlideCard;
