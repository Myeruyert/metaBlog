import Link from "next/link";

const TrendingCard = ({ image, category, title, id, tags }) => {
  return (
    <>
      <Link href={"/blogArticle/" + id}>
        <div className="px-10 py-5 md:p-0 relative">
          <div className="m-10 md:m-0 absolute left-3 bottom-3 right-4 z-10 h-20">
            <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium text-xs">
              {tags[0] ? tags[0] : category}
            </button>
            <h5 className="text-white text-base font-semibold">
              {title.length > 60 ? title.substring(0, 60) + "..." : title}
            </h5>
          </div>
          <img
            className="rounded-xl h-[420px] object-cover brightness-[0.65]"
            fill={true}
            src={image}
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default TrendingCard;
