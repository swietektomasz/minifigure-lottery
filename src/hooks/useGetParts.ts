import { useEffect, useState } from "react";

import { Part } from "../types";

export const useGetParts = (query: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<Array<Part>>([]);

  useEffect(() => {
    if (!query) return;
    const fetchMinifigs = async () => {
      setStatus("fetching");
      await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/${query}/parts`,
        {
          headers: { Authorization: "key 913d12d30b68288a7e2fcffe7e4f0f06" },
        }
      )
        .then((res) => res.json())
        .then((parts) => setData(parts.results));
      setStatus("fetched");
    };

    fetchMinifigs();
  }, [query]);

  return { status, data };
};
