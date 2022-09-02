import { useState, useEffect, useCallback } from "react";

export const useFetch = (path) => {
  const [data, setData] = useState({
    isLoading: false,
    data: null,
    onError: null,
  });

  const getData = useCallback(async () => {
    setData({ isLoading: true });
    try {
      let response = await fetch(path);
      let responseData = await response.json();
      let mapData = responseData.map((el, i) => ({key: el.id, ...el}))
      setData({ isLoading: false, data: mapData });
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
