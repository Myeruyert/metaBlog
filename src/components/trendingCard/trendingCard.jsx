const TrendingCard = ({ image, articleType, title }) => {
  return (
    <>
      <div className="p-10 md:p-0 relative">
      <div className="absolute mt-[172px] z-10 px-7">
          <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
            {articleType}
          </button>
          <h5 className="text-white text-lg font-semibold">{title}</h5>
        </div>
        <img className="rounded-xl h-[320px] object-cover brightness-[0.65]" fill={true} src={image} alt="" />

      </div>
    </>
  );
};

export default TrendingCard;
