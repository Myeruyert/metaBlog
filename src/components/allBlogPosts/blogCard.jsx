const BlogCard = ({image, articleType, title, date}) => {
    return (
        <>
            <div className="m-10 p-4 border rounded-xl">
                <img className="rounded-xl w-[289px] h-[320px]" src={image} alt="" />
                <div className="mt-4 p-2">
                    <button className="border py-1 px-2.5 rounded-lg bg-slate-100 text-blue-400 mb-4 font-medium">{articleType}</button>
                    <h5 className="text-whit text-lg font-semibold">{title}</h5>
                    <p className="text-base text-gray-400 mt-5">{date}</p>
                </div>
            </div>
        </>

    )

};

export default BlogCard;