import React, { useState } from 'react';
import { GlobalStyle } from './components/Global';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Banner from './components/Banner';
import MobileNav from './components/MobileNav';

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
    fontFamily: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: '400px',
    mid: '900px',
    large: '1100px',
  },
};

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleOpenCloseNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <MobileNav
          handleOpenCloseNav={handleOpenCloseNav}
          navIsOpen={navIsOpen}
        />
        <Hero handleOpenCloseNav={handleOpenCloseNav} />
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
