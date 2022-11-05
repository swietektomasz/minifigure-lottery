import { useEffect } from "react";
import { useMinifigures } from "../../context/Minifigures";
import { useGetMinifigs } from "../../hooks/useGetMinifigs";

export const Lottery = () => {
  const { data } = useGetMinifigs("?in_theme_id=246&page=1");
  const { dispatch } = useMinifigures();

  useEffect(() => {
    dispatch({ type: "set-figs", data });
  }, [data]);

  return <div>lottery</div>;
};
