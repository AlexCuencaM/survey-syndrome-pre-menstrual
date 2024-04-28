import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, theme } from './theme';


export const MyThemeProvider = ({children}:MyThemeProviderProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
interface MyThemeProviderProps{
    children: JSX.Element;
}