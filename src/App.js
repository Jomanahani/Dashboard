import { useState } from "react";
import NavBar from "./Components/NavBar";
import { lightTheme } from "../src/global/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/style";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
