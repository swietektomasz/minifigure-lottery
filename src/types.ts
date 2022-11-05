import { ReactNode } from "react";

export type Minifigure = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
};

export type MinifigureActions = {
  type: "set-figs" | "roll-figs";
  data: [];
};

export type MinifigureState = {
  figs: Array<Minifigure>;
};

export type MinifigureDispatch = (action: MinifigureActions) => void;

export interface ContextConsumer {
  children: ReactNode;
}
