import { useEffect, useState } from "react";
import BlogCard from "../allBlogPosts/blogCard";
const UseEffects = () => {
    const[articles, setArticles] = useState([]);

    const getArticleData = async () => {
        const response = await fetch("https://dev.to/api/articles?page=1&per_page=5"); 
        const data = await response.json();
        setArticles(data)
        console.log("data", data);
        
    }
    useEffect( () => {
        getArticleData()
    }, [])
    return(
        <>
        <div>A
            {articles.map((article) => {
                return(
                    <BlogCard title={article.title}/>
                )
            })}
        </div>
        </>
    )
}; 

export default UseEffects; 