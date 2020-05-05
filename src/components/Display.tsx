import React from "react";
import classnames from "classnames";
import { withTheme } from "styled-components";

import { Buffer } from "../types/Calculator";

import { Theme } from "../lightTheme";

interface Props {
  buffer: Buffer;
  theme: Theme;
}

const Display: React.FC<Props> = ({ buffer, theme }) => {
  const backgroundClass = `bg-${theme.backgroundColor}`;

  return (
    <div className={classnames("m-2", "p-2", backgroundClass)} role="textbox">
      &nbsp;{buffer}
    </div>
  );
};

export default withTheme(Display);
