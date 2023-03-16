import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 8px;
  background-color:${(props) => props.theme.pallet.Lines};
}
::-webkit-scrollbar-thumb {
  background-color: #999999;
  border-radius: 15px;
}
body{
background-color:${(props) => props.theme.pallet.page};
}
body a {
  text-decoration: none;
}
`;
export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "aside nav nav"
    "aside steps main";
  grid-template-columns: 6% 15% 1fr;
  grid-template-rows: 5rem 1fr;
`;
export const Main = styled.main`
  grid-area: main;
  width: 100%;
  padding: 2% 7%;
  margin: 0 auto;
`;
