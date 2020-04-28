import React from "react";
import { Result } from "./types/Calculator";

interface Props {
  result: Result;
}

const Display: React.FC<Props> = ({ result }) => {
  return <div className="p-2 m-2 bg-blue-100">{result}</div>;
};

export default Display;
