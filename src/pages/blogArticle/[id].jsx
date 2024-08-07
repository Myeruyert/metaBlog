import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import ArticleInfo from "@/components/articleInfo";

const BlogArticleDetail = () => {
  const { query } = useRouter();
  const [articleDetail, setArticleDetail] = useState(null);
  const [articleInfo, setArticleInfo] = useState([]);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);


  return (
    <div className="w-2/5 m-auto my-24 text-justify innerHtml">
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
      <div dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}></div>
    </div>
  );
};

export default BlogArticleDetail;
