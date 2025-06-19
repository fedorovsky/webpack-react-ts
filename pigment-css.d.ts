import type { pigmentTheme } from './pigment-css/dist/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs {
    theme: typeof pigmentTheme;
  }
}
