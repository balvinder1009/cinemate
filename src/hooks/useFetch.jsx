import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const api_key = "b3f172ce34c53fa05106198c37522c98";
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-undef
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${api_key}&query=${queryTerm}`;

  //   console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    fetchMovies();
  }, [url]);

  return { data };
};
