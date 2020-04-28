import React from "react";
import { Digit } from "./types/Calculator";

interface Props {
  digit: Digit;
  onClick?: () => void;
}

const DigitButton: React.FC<Props> = ({ digit, onClick }) => {
  return (
    <button className="p-2 m-2 bg-blue-100 hover:bg-blue-200" onClick={onClick}>
      {digit}
    </button>
  );
};

export default DigitButton;
