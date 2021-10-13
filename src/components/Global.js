import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0px;
  padding:0px; 
}

html, body{
  min-height: 100vh;
}
html{
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.font.bodySize};
}
body {
  background:${({ theme }) => theme.colors.white};
  font-family:${({ theme }) => theme.font.fontFamily};
  color: hsl(192, 100%, 9%);
  margin: 0;
  padding:0;
}

p {
  opacity: 0.6;
  line-height: 1.5;
    color: #00000073;
    letter-spacing: 0.02em;
    font-size: 14px;
    font-weight: 300;
    transform: scale(1, 0.9);
}

img{
  max-width: 100%;
  margin: 0;
  padding: 0;
}
.App{
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;}
`;
