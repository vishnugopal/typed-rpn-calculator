import { State, Action } from "./types/Calculator";

const calculatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "digitPressed":
      const stateCopy = { ...state };
      stateCopy.buffer = `${stateCopy.buffer}${action.payload}`;
      return { buffer: stateCopy.buffer, stack: stateCopy.stack };
  }

  return state;
};

export default calculatorReducer;
