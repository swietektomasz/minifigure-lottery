import { createContext, useContext, useReducer } from "react";
import {
  ContextConsumer,
  MinifigureActions,
  MinifigureState,
  MinifigureDispatch,
} from "../types";

const DEFAULT_MINIFIGURE_STATE: MinifigureState = {
  figs: [],
};

const MinifigureContext = createContext<
  { state: MinifigureState; dispatch: MinifigureDispatch } | undefined
>(undefined);

function minifigureReducer(state: MinifigureState, action: MinifigureActions) {
  switch (action.type) {
    case "set-figs": {
      return { ...state, figs: action.data };
    }
    case "roll-figs": {
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

  return context;
}

export { MinifigureProvider, useMinifigures };
