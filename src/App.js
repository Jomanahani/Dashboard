import { useState } from "react";
import NavBar from "./Components/NavBar";
import { lightTheme } from "../src/global/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Layout } from "./global/style";
import SideBar from "./Components/SideBar";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Layout>
          <NavBar />
          <SideBar />
          <main></main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
