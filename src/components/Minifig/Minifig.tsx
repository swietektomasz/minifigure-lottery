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
  const figElement = document.getElementById(randomFig?.name);

  const chooseFig = () => {
    dispatch({ type: "choose-fig", data: randomFig });
    if (figElement) figElement.className += " active";
  };

  useEffect(() => {
    if (figurine.name !== randomFig?.name && figElement)
      figElement.className = "lottery__box";
  }, [figurine]);

  useEffect(() => {
    document
      .getElementById(randomFig?.set_img_url)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [randomFig]);

  return (
    <div className="lottery__box" id={randomFig?.name}>
      {set.map((fig) => (
        <div
          className="minifig"
          key={fig.set_img_url}
          onClick={() => chooseFig()}
          id={fig.set_img_url}
        >
          <img className="minifig__img" src={fig.set_img_url} />
          <p>{fig.name}</p>
          <a>Show details</a>
        </div>
      ))}
    </div>
  );
};
