import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
}
body {
  &::-webkit-scrollbar {
  display: none;
}
} 
`;
