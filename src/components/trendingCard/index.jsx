import React, { useState } from "react";
import TrendingCard from "./trendingCard";

const trendingCardData = [{
    image: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UaeMflZthJbLWO4fYsZntkBYw9rNFb8XF0N4QTPygrA3NbQfKmVjyBT43L3NtwomjDqKhDlbJsWPGVzqtTk5s6DxBUnmxS2tPR0TDzyvSgvZ1fkL50fgU6mMH7T5EwrGRw6Dy0QfsT9WBJP4yOTbIJbhTsFYa0BICBUSoyNpC4Pip5ixKd3VSAFGx2lpcXFE7cSIb-jnp0Ll47nkLb-6uL42hJqR6VlnMbXyA-GNs~QJtijBPezcUQgBTP0JHXdvbLy~A-ivgcbi~pyD7fur5BETw0~rwRnhIvSMo1NH0kk1FUuZoq8O-HywzprAItNw-840kN~WPHoGZep-5Kv-Mg__",
    articleType: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing"
  }
  ]

const Trending = () => {
    const [changeData, setChangeData] = useState(trendingCardData);
    return (
        <>
         <div className="">
      <h3 className="text-2xl font-bold px-10 mt-8">Trending</h3>
      <div className="md:flex">
      {changeData.map((data)=>(
        <TrendingCard
        image={data.image}
        articleType={data.articleType} 
        title={data.title}
        />

))}
      </div>
    </div>
        </>
    )
};
export default Trending;