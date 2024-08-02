import React, { useState } from "react";
import BlogCard from "./blogCard";

const blogCardData = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__",
    articleType: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9Dtxxcc06NBsCHKj~HMvE5cmVjfPqtmLPslriW3kHnRMJpnqIxLlFzxkMiZ1te3BzP~XSbL5tBoS-CNzWlVrFzOOkIbE6f2IFXXjcpxWX9b0GPqPhyaOL4uKEF9e5YnG7EuToKJZG~IaQ-XpduLYDyvGAcPKScySkEmC7fMM1yAf8aDdlRuJvshSFucSdqt85fcW2AOSIoHnrGvYSSkQ5h0~D4cfSEQKESvmdRAWcRJ9X8b8z4faJG1a7MFiqYGD0GjdbjeFeSaqeZrgKOHsgKzEJ2bLxrU7~hKN0lRtFiUBFDOCzYdMzmxPtdGD-eyBYBcQ8fniTZu7KcWPw0xcw__",
    articleType: "Design",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2ovyR~-GznK3t6WZenWodkrP4LIbZzGzdFFdqFXua3KqWRmS38YI3-x94A0mIeAmT~dREr67YY47W4KR0rk1fqiCSQC7uEBIZ35H9TseRSvQWcTMlaHuqi28uTewc6nJSqsfmNWDD2y8PsLBQ-T7Oex2zCtufvrtnTzgYGuk4B4wVeO8QLOkew5-wZpxSsJzbNZBinOpZuGpRBfrFHgsz7LZVjK9H9KRQaD66soVJ7wDBtaNZrnt1Cn9BCsJjVrbLnYm2QMdHPYWysVGcjh8zZWUIFSr8r-QkTCbBw007t-lLQnTCzbEJqYOh3-P9ynsizooyuM5R51MLmV69zWPQ__",
    articleType: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const AllBlogPosts = () => {
  const [changeData, setChangeData] = useState(blogCardData);
  return (
    <>
      <div className="md:w-3/5 md:my-24 m-auto">
        <h3 className="text-2xl font-bold px-10 md:px-0 mt-8">All Blog Post</h3>
        <div className="hidden md:flex justify-between md:my-8 text-xs font-bold">
          <div>
            <ul className="flex gap-5">
              <li className="text-[#D4A373]">All</li>
              <li>Design</li>
              <li>Travel</li>
              <li>Fashion</li>
              <li>Technology</li>
              <li>Branding</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>View All</li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4">
          {changeData.map((data) => (
            <BlogCard
              image={data.image}
              articleType={data.articleType}
              title={data.title}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlogPosts;
