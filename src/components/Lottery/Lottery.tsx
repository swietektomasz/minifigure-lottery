import { useEffect, useState } from "react";

import { MinifigureProvider } from "../../context/Minifigures";
import { useGetMinifigs } from "../../hooks/useGetMinifigs";
import { Minifigure } from "../../types";
import { Minifig } from "../Minifig/Minifig";

export const Lottery = () => {
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
    <div className="lottery">
      <div className="lottery__wrapper">
        {status === "fetched" && (
          <MinifigureProvider>
            <Minifig set={randomSets.set1} />
            <Minifig set={randomSets.set2} />
            <Minifig set={randomSets.set3} />
          </MinifigureProvider>
        )}
      </div>
      <button className="button">Proceed to shipment</button>
    </div>
  );
};
