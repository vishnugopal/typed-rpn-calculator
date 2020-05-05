import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./lightTheme";

import "./styles.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="max-w-md m-auto"></div>
    </ThemeProvider>
  );
}

export default App;
