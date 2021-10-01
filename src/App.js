import React from 'react';
import { GlobalStyle } from './components/Global';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Banner from './components/Banner';

const theme = {
  colors: {
    darkGrey: 'hsl(0, 0%, 63%)',
    vDarkGrey: 'hsl(0, 0%, 27%)',
    black: 'hsl(0, 0%, 0%)',
    white: 'hsl(0, 0%, 100%)',
    greyFont: '#00000073',
  },
  font: {
    bodySize: '10px',
  },
  mobile: '375px',
  desktop: '1440px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Hero />
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
