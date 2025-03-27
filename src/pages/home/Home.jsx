import React from 'react';
import Presentation from '../../sections/Presentation';
import AboutMe from '../../sections/AboutMe';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';
import MyAppBar from '../../components/AppBar';
import Skills from '../../sections/Skills';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar />
      <Presentation />
      <AboutMe />
      <Skills />
    </ThemeProvider>
  );
}

export default Home;
