import React, { useState } from "react";
import BlogCard from "./blogCard";

const blogCardData = [{
    image: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__",
    articleType: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing", 
    date: "August 20, 2022"
  }
  ]

const AllBlogPosts = () => {
    const [changeData, setChangeData] = useState(blogCardData);
    return (
        <>
         <div className="">
      <h3 className="text-2xl font-bold px-10 mt-8">All Blog Post</h3>
      <div className="md:flex">
      {changeData.map((data)=>(
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
    )
}; 

export default AllBlogPosts;
