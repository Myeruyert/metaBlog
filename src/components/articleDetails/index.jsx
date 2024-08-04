import React from "react";

const ArticleDetails = ({articleHeading, articleParagraph}) => {
  return (
    <>
    <div className="">
        <h5 className="text-2xl font-semibold text-[#181A2A]">{articleHeading}</h5>
        <p className="my-8 text-xl text-[#3B3C4A]">{articleParagraph}</p>
    </div>

    </>
  );
};

export default ArticleDetails;