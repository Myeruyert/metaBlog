import { createContext, useState, useEffect } from "react";

export const HeroContext = createContext(null);

const HeroProvider = ({ children }) => {
  const [changeData, setChangeData] = useState([]);
  const [clickNext, setClickNext] = useState(1);

  const getArticleData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?page=${clickNext}&per_page=1`
      );
      const data = await response.json();
      setChangeData(data);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, [clickNext]);

  return (
    <HeroContext.Provider
      value={{ changeData, setChangeData, clickNext, setClickNext }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
