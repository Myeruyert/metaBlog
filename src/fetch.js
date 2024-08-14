export const getArticleData = async (count, setIsLoading, setChangeData) => {
  try {
    setIsLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await response.json();

    setChangeData(data);
    console.log("data", data);
    setIsLoading(false);
  } catch (error) {
    console.log("error", error);
    setIsLoading(false);
    // toast.error("Network error. Please try again");
  }
};
