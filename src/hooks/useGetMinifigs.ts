import { useEffect, useState } from "react";

export const useGetMinifigs = (query: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchMinifigs = async () => {
      setStatus("fetching");
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/${query}`
      );
      const data = await response.json();
      setData(data.results);
      setStatus("fetched");
    };

    fetchMinifigs();
  }, [query]);

  return { status, data };
};
