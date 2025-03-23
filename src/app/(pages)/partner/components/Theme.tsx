"use client"

import { createGlobalStyle, ThemeProvider } from 'styled-components';



const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;