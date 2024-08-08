import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogArticleDetail = () => {
  const { query } = useRouter();
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    if (query.id) {
      getArticleById(query.id);
    }
  }, [query.id]);
  console.log("ad", articleDetail);

  return (
    <div className="w-2/5 m-auto my-24 text-justify innerHtml">
      <h1 className="w-full mb-5 text-4xl font-semibold leading-10 text-[#181A2A">
        {articleDetail?.title}
      </h1>
      <div className="flex items-center gap-6 text-[#696A75] text-sm mb-8">
        <div className="flex items-center gap-2">
          <img
            className="w-[20px] rounded-full"
            src={articleDetail?.user.profile_image}
            alt=""
          />
          <span className="capitalize">{articleDetail?.user.username}</span>
        </div>
        <div>{articleDetail?.published_at}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}></div>
    </div>
  );
};

export default BlogArticleDetail;
