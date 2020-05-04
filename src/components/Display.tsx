import React from "react";

import { Buffer } from "../types/Calculator";

interface Props {
  buffer: Buffer;
}

const Display: React.FC<Props> = ({ buffer }) => {
  return (
    <div className="m-2 p-2 bg-blue-200" role="textbox">
      &nbsp;{buffer}
    </div>
  );
};

export default Display;
