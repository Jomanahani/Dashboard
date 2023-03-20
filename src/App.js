import { useState } from "react";
import { lightTheme } from "../src/global/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/style";
import CategoryProvider from "./Context/CartContext";
import Router from "./Router";

function App() {
  const [theme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
      <div className="App">
        <GlobalStyle />
        <Router />
      </div>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default App;
