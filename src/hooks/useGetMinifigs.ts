import { useEffect, useState } from "react";
import { Minifigure } from "../types";

export const useGetMinifigs = (query: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<Array<Minifigure>>([]);

  useEffect(() => {
    if (!query) return;
    const fetchMinifigs = async () => {
      setStatus("fetching");
      await fetch(`https://rebrickable.com/api/v3/lego/minifigs?${query}`, {
        headers: { Authorization: "key 913d12d30b68288a7e2fcffe7e4f0f06" },
      })
        .then((res) => res.json())
        .then((figs) => setData(figs.results));
      setStatus("fetched");
    };

    fetchMinifigs();
  }, [query]);

  return { status, data };
};
