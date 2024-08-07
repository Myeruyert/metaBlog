import React, { useState } from "react";
import ArticleDetails from "../articleDetails";
import { FaUserCircle } from "react-icons/fa";

const articleContainer = [
  {
    articleHeading: "",
    articleParagraph:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
  },
  {
    articleHeading: "",
    articleParagraph:
      "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    articleHeading: "Research Your Destination",
    articleParagraph:
      "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.",
  },
];

const ArticleInfo = ({title, profileImmage, username, date, imgUrl}) => {
  const [article, setArticle] = useState(articleContainer);
  return (
    <>
      <div className="w-2/5 m-auto my-24 text-justify">
        <h1 className="w-full mb-5 text-4xl font-semibold leading-10 text-[#181A2A">
          {title}
        </h1>
        <div className="flex items-center gap-6 text-[#696A75] text-sm mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[28px]">
              {profileImmage}
            </span>
            <span>{username}</span>
          </div>
          <div>{date}</div>
        </div>
        <img
          className="rounded-xl"
          src={imgUrl}
          alt=""
        />
        <div>
          {article.map((data) => (
            <ArticleDetails
              articleHeading={data.articleHeading}
              articleParagraph={data.articleParagraph}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleInfo;
