import React from 'react';
import { globalCss } from '@pigment-css/react';
import { Card } from './components/card';
import { ToggleTheme } from './components/theme';

globalCss`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    color: var(--palette-foreground);
    background-color: var(--palette-background);
  }
`;

export const App = () => {
  return (
    <div>
      <ToggleTheme />
      <Card />
    </div>
  );
};
