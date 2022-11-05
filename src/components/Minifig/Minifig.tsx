import { useEffect, useMemo } from "react";
import { useMinifigures } from "../../context/Minifigures";

import { Minifigure } from "../../types";

export const Minifig = ({ set }: { set: Array<Minifigure> }) => {
  const {
    state: { figurine },
    dispatch,
  } = useMinifigures();
  const randomFig: Minifigure = useMemo(
    () => set[Math.floor(Math.random() * set.length)],
    [set]
  );
  const figElement = randomFig && document.getElementById(randomFig.name);

  document
    .getElementById(randomFig?.name)
    ?.scrollIntoView({ behavior: "smooth" });

  const chooseFig = () => {
    dispatch({ type: "choose-fig", data: randomFig });
    if (figElement) figElement.className += " active";
  };

  useEffect(() => {
    if (randomFig && figurine.name !== randomFig.name && figElement)
      figElement.className = "lottery__box";
  }, [figurine]);

  if (!randomFig) return null;

  return (
    <div className="lottery__box" id={randomFig.name}>
      {set.map((fig) => (
        <div className="minifig" key={fig.name} onClick={() => chooseFig()}>
          <img className="minifig__img" src={fig.set_img_url} />
          <p>{fig.name}</p>
          <a>Show details</a>
        </div>
      ))}
    </div>
  );
};
