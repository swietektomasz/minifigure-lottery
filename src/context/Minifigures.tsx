import { createContext, useContext, useReducer } from "react";
import {
  ContextConsumer,
  MinifigureActions,
  MinifigureState,
  MinifigureDispatch,
} from "../types";

const DEFAULT_MINIFIGURE_STATE: MinifigureState = {
  figurine: {
    name: "poop",
    last_modified_dt: "",
    num_parts: 0,
    set_img_url: "",
    set_num: "",
    set_url: "",
  },
};

const MinifigureContext = createContext<
  { state: MinifigureState; dispatch: MinifigureDispatch } | undefined
>(undefined);

function minifigureReducer(state: MinifigureState, action: MinifigureActions) {
  switch (action.type) {
    case "choose-fig": {
      return { figurine: action.data };
    }
    case "submit-fig": {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MinifigureProvider({ children }: ContextConsumer) {
  const [state, dispatch] = useReducer(
    minifigureReducer,
    DEFAULT_MINIFIGURE_STATE
  );

  const value = { state, dispatch };

  return (
    <MinifigureContext.Provider value={value}>
      {children}
    </MinifigureContext.Provider>
  );
}

function useMinifigures() {
  const context = useContext(MinifigureContext);

  if (context === undefined) {
    throw new Error("useMinifigures must be used within a MinifigureProvider");
  }

  console.log(context.state.figurine);

  return context;
}

export { MinifigureProvider, useMinifigures };
