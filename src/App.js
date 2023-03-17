import { useState } from "react";
import { lightTheme } from "../src/global/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/style";
import Home from "./Pages/Home";
import CategoryProvider from "./Context/CartContext";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default App;
