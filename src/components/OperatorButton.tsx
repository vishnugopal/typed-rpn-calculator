import React from "react";
import { Operator } from "../types/Calculator";

interface Props {
  operator: Operator;
  onClick?: (operator: Operator) => void;
}

const OperatorButton: React.FC<Props> = ({ operator }) => {
  return (
    <button className="m-2 p-2 bg-blue-200 w-8" data-testid="displayBuffer">
      {operator}
    </button>
  );
};

export default OperatorButton;
