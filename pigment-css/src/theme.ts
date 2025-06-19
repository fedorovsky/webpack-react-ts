import { extendTheme } from './utils/extend-theme';
import '@pigment-css/react/theme';

export const pigmentTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: '#3498db',
        background: '#f7f7f7',
        foreground: '#333333',
      },
    },
    dark: {
      palette: {
        primary: '#1e88e5',
        background: '#121212',
        foreground: '#e0e0e0',
      },
    },
  },
  getSelector: (scheme) => (scheme ? `[data-theme="${scheme}"]` : ':root'),
});
