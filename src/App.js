import { useState } from "react";
import { lightTheme } from "../src/global/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/style";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
