import React from "react";

interface Props {
  digit: number;
  onClick?: (digit: number) => void;
}

const DigitButton: React.FC<Props> = ({ digit }) => {
  return <button className="m-2 p-2 bg-blue-200 w-8">{digit}</button>;
};

export default DigitButton;
