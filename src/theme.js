import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Epilogue', // Nome da fonte
      'sans-serif',
    ].join(','),
  },
});

export default theme;
