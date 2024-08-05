const BlogCard = ({ image, articleType, title, date }) => {
  return (
    <>
      <div className="m-10 p-4 md:m-0 border rounded-xl">
        <div className="">
          <img
            className="w-full h-[320px] md:h-[240px] m-auto rounded-xl object-cover"
            fill={true}
            src={image}
            alt=""
          />
        </div>

        <div className="mt-4 p-2">
          <button className="py-1 px-2.5 rounded-lg bg-slate-100 text-[#4B6BFB] mb-4 font-medium">
            {articleType}
          </button>
          <h5 className="text-whit text-lg font-semibold">{title}</h5>
          <p className="text-base text-gray-400 mt-5">{date}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
