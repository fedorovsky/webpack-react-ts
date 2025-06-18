import React from 'react';
import { globalCss } from '@pigment-css/react';
import { Card } from './components/card';

globalCss`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
  }
`;

export const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};
