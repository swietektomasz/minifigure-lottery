import { ReactNode } from "react";

export type Minifigure = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
};

export type Part = {
  id: number;
  part: {
    part_num: string;
    name: string;
    part_url: string;
    part_img_url: string;
  };
  set_num: string;
};

export type MinifigureActions = {
  type: "choose-fig" | "submit-fig";
  data: Minifigure;
};

export type MinifigureState = {
  figurine: Minifigure;
};

export type MinifigureDispatch = (action: MinifigureActions) => void;

export interface ContextConsumer {
  children: ReactNode;
}
