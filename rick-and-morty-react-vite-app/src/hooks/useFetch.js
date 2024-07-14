import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(dependency, initialValue) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState(initialValue);
    const [info, setInfo] = useState({});
  
    const { id, url, page } = dependency;
  
    useEffect(() => {
      setIsLoading(true);
  
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  
      async function fetchData() {
        try {
          let response;
          if (id && parseInt(id) > 0) {
            response = await axios.get(`${url}/${id}`);
            setData([response.data]);
            setInfo({ pages: 1 });
          } else {
            response = await axios.get(`${url}?page=${page}`);
            setData(response.data.results);
            setInfo(response.data.info);
          }
          setError(null);
        } catch (e) {
          setError({ message: "Failed to fetch data." });
          setData([]);
          setInfo({ pages: 1 });
        }
      }
      fetchData();
  
      return () => {
        clearTimeout(timer);
      };
    }, [id, url, page]);
  
    return { isLoading, error, data, info };
  }
