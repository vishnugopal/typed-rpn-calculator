import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import Display from "./Display";
import calculatorReducer, { State } from "./calculatorReducer";

import "./styles.css";

function App() {
  const initialState: State = {
    stack: [],
    result: 0,
  };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <>
      <div className="bg-blue-200">Calculator</div>
      <Display result={state.result} />
      <DigitButton
        digit="7"
        onClick={() => {
          dispatch({ type: "operandPress", payload: { operand: "7" } });
        }}
      />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <DigitButton digit="+" />
      <br />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <DigitButton digit="-" />
      <br />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <br />
      <DigitButton digit="0" />
    </>
  );
}

export default App;
