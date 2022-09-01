import { useState, useEffect, useCallback } from "react";

export const useFetch = (path) => {
  const [data, setData] = useState({
    isLoading: false,
    data: null,
    onError: null,
  });

  console.log(path);

  const getData = useCallback(async () => {
    setData({ isLoading: true });
    try {
      let response = await fetch(path);
      let responseData = await response.json();
      setData({ isLoading: false, data: responseData });
    } catch (err) {
      setData({ isLoading: false, onError: err });
      throw Error(err.message);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    ...data,
    getData,
  };
};
