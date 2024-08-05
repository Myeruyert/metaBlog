const TrendingCard = ({ image, category, title }) => {
  return (
    <>
      <div className="p-10 md:p-0 relative">
        <div className="absolute left-3 bottom-3 right-4 z-10">
          <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium text-xs">
            {category}
          </button>
          <h5 className="text-white text-base font-semibold">{title}</h5>
        </div>
        <img
          className="rounded-xl h-[420px] object-cover brightness-[0.65]"
          fill={true}
          src={image}
          alt=""
        />
      </div>
    </>
  );
};

export default TrendingCard;
