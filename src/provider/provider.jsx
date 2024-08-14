import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { getArticleData } from "@/fetch";

export const MyContext = createContext(null);

export const useMyContext = () => {
  return useContext(MyContext);
};

const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [changeData, setChangeData] = useState([]);
  const [count, setCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // const getArticleData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       `https://dev.to/api/articles?page=1&per_page=${count}`
  //     );
  //     const data = await response.json();

  //     setChangeData(data);
  //     console.log("data", data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log("error", error);
  //     setIsLoading(false);
  //     toast.error("Network error. Please try again");
  //   }
  // };

  useEffect(() => {
    getArticleData(count, setIsLoading, setChangeData);
  }, [count]);

  const handleChange = (cat) => {
    setSelectedCategory(cat);
  };

  const filteredArticles = changeData.filter((article) =>
    article?.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("filtered article", filteredArticles);

  return (
    <MyContext.Provider
      value={{
        searchValue,
        setSearchValue,
        changeData,
        setChangeData,
        count,
        setCount,
        selectedCategory,
        setSelectedCategory,
        handleChange,
        filteredArticles,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
