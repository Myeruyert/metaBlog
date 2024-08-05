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

const ArticleInfo = () => {
  const [article, setArticle] = useState(articleContainer);
  return (
    <>
      <div className="w-2/5 m-auto my-24 text-justify">
        <h1 className="w-full mb-5 text-4xl font-semibold leading-10 text-[#181A2A">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex items-center gap-6 text-[#696A75] text-sm mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[28px]">
              <FaUserCircle />
            </span>
            <span>Tracey Wilson</span>
          </div>
          <div>August 20, 2022</div>
        </div>
        <img
          className="rounded-xl"
          src="https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRPy-r5bdGN4Zafop7F4ylm~YU4EWMpb2Lmo68wZDKw3Rh9AzUmqB2L2iDQ57xXRW2gwv-~7V1Nps0NEFT~VljX3lFEzYo9KjRZOlrQxH9eU0r3FjjkQbFK7r4rOs77nGucZpD2rEYs6GY7D00Cs9hVypIkaF9ABc7gXH6MuO-h3q9SxVeUfxDReRegr5OvXnIt7yNOfBO0m4givkMCxGqSBMiC3MVvv6wDtJ9Vn06NP3e9tjMbQo0~s8Fmyx413BWI~mdpET2HZYY7r~u4y5BZd-nGFkgdgdNK4EFd3yv~T2Qzzbo~VR77deYcFB1y8HvTIpo4ET0VCiPguElzA-A__"
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
