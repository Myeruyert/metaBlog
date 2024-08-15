import { createContext, useState, useEffect, useContext } from "react";
import { getArticleData } from "@/fetch";

export const HeroContext = createContext(null);
export const useHeroContext = () => {
  return useContext(HeroContext);
};

const HeroProvider = ({ children }) => {
  const [changeData, setChangeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const getArticleData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://dev.to/api/articles?page=1&per_page=5`
  //     );
  //     const data = await response.json();
  //     setChangeData(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  useEffect(() => {
    getArticleData(3, setIsLoading, setChangeData);
  }, []);

  return (
    <HeroContext.Provider
      value={{ changeData, setChangeData, currentIndex, setCurrentIndex }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
