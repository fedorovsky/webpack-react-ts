import type { pigmentTheme } from './dist/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs {
    theme: typeof pigmentTheme;
  }
}
