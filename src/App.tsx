import React from "react";
import Display from "./components/Display";

import "./styles.css";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import EnterButton from "./components/EnterButton";

function App() {
  return (
    <div className="max-w-md m-auto">
      <Display buffer="2" />
      <DigitButton digit={7} />
      <DigitButton digit={8} />
      <DigitButton digit={9} />
      <OperatorButton operator="+" />
      <br />
      <DigitButton digit={4} />
      <DigitButton digit={5} />
      <DigitButton digit={6} />
      <OperatorButton operator="-" />
      <br />
      <DigitButton digit={1} />
      <DigitButton digit={2} />
      <DigitButton digit={3} />
      <EnterButton />
    </div>
  );
}

export default App;
