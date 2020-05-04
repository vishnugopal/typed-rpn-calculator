import React from "react";

interface Props {
  digit: number;
  onClick?: (digit: number) => void;
}

const DigitButton: React.FC<Props> = ({ digit, onClick }) => {
  return (
    <button
      className="m-2 p-2 bg-blue-200 w-8"
      onClick={() => (onClick ? onClick(digit) : null)}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
