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
    "nav nav aside"
    "main steps aside";
  grid-template-columns: 1fr 1fr 6%;
`;

// export const Container = styled.div`
//   width: 100%;
//   padding: 0 7%;
//   margin: 0 auto;
// `;
