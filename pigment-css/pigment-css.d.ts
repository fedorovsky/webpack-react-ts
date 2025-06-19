/// <reference types="@pigment-css/react/theme" />
import type { pigmentTheme } from './dist/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs {
    readonly theme: typeof pigmentTheme;
  }
}
