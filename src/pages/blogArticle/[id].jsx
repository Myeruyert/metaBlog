import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";

const BlogArticleDetail = () => {
  const { query } = useRouter();
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);

  return (
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
      <div dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}></div>
    </div>
  );
};

export default BlogArticleDetail;
