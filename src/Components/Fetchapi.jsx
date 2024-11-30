import { useDebugValue, useEffect, useState } from "react";

const useFetchapi = (url = "", options = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.products); // Ensure you access the `products` key if the API returns data like `{ products: [...] }`
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  useDebugValue(`Fetching data from: ${url}`);
  return { isLoading, data, error };
};

export default useFetchapi;
