import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    body: '#fff',
    darkGrey: 'hsl(0, 0%, 63%)',
    vDarkGray: 'hsl(0, 0%, 27%)',
    black: 'hsl(0, 0%, 0%)',
    white: 'hsl(0, 0%, 100%)',
  },
  font: {
    bodySize: '12px',
  },
  mobile: '375px',
  desktop: '1440px',
};

function App() {
  return (
    <ThemeProvider>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
