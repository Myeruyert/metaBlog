const TrendingCard = ({image, articleType, title}) => {
    return (
        <>
            <div className="p-10 relative">
                <img className="rounded-xl w-[289px] h-[320px]" src={image} alt="" />
                <div className="px-7">
                    <button className="border py-1 px-2.5 rounded-lg bg-blue-400 text-white mb-4 font-medium">{articleType}</button>
                    <h5 className="text-whit text-lg font-semibold">{title}</h5>
                </div>
            </div>
        </>

    )

};

export default TrendingCard;