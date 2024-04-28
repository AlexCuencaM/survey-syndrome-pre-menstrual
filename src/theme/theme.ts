import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
});
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
