import React, { useState, useEffect } from 'react';
import './app.css';
import { GlobalStyle } from './components/Global';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero';
import Banner from './components/Banner';
import MobileNav from './components/MobileNav';
import Nav from './components/Nav';

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
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth;
      setWindowSize(newSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleOpenCloseNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {windowSize > 900 ? (
          <Nav />
        ) : (
          <MobileNav
            handleOpenCloseNav={handleOpenCloseNav}
            navIsOpen={navIsOpen}
          />
        )}

        <Hero
          navIsOpen={navIsOpen}
          windowSize={windowSize}
          handleOpenCloseNav={handleOpenCloseNav}
        />
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
