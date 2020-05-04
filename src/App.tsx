import React, { useReducer } from "react";
import Display from "./components/Display";

import "./styles.css";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import EnterButton from "./components/EnterButton";

import calculatorReducer from "./calculatorReducer";
import { State } from "./types/Calculator";

function App() {
  const initialState: State = { buffer: "", stack: [] };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const digitButtonClick = (digit: number) => {
    dispatch({ type: "digitPressed", payload: digit });
  };

  return (
    <div className="max-w-md m-auto">
      <Display buffer={state.buffer} />
      <DigitButton digit={7} onClick={digitButtonClick} />
      <DigitButton digit={8} onClick={digitButtonClick} />
      <DigitButton digit={9} onClick={digitButtonClick} />
      <OperatorButton operator="+" />
      <br />
      <DigitButton digit={4} onClick={digitButtonClick} />
      <DigitButton digit={5} onClick={digitButtonClick} />
      <DigitButton digit={6} onClick={digitButtonClick} />
      <OperatorButton operator="-" />
      <br />
      <DigitButton digit={1} onClick={digitButtonClick} />
      <DigitButton digit={2} onClick={digitButtonClick} />
      <DigitButton digit={3} onClick={digitButtonClick} />
      <EnterButton />
    </div>
  );
}

export default App;
