import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Minifig } from "../";
import { Minifigure } from "../../types";
import { useGetMinifigs } from "../../hooks/useGetMinifigs";
import { MinifigureProvider } from "../../context/Minifigures";

export const Lottery = () => {
  const navigate = useNavigate();
  const { data, status } = useGetMinifigs("in_theme_id=246&page=1");
  const [randomSets, setRandomSets] = useState<{
    [key: string]: Array<Minifigure>;
  }>({
    set1: [],
    set2: [],
    set3: [],
  });

  useEffect(() => {
    rollForFigs();
  }, [data.length]);

  const rollForFigs = () => {
    if (data.length) {
      const shuffledFigs = [...data].sort(() => 0.5 - Math.random());
      setRandomSets({
        set1: shuffledFigs.slice(0, 10),
        set2: shuffledFigs.slice(10, 20),
        set3: shuffledFigs.slice(20, 30),
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        {status === "fetched" && (
          <MinifigureProvider>
            <Minifig set={randomSets.set1} />
            <Minifig set={randomSets.set2} />
            <Minifig set={randomSets.set3} />
          </MinifigureProvider>
        )}
      </div>
      <button className="button" onClick={() => navigate("/shipment")}>
        Proceed to shipment
      </button>
    </div>
  );
};
