import * as React from 'react';
import { styled } from '@pigment-css/react';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.vars.palette.background,
  color: theme.vars.palette.foreground,
  border: `2px solid ${theme.vars.palette.primary}`,
  borderRadius: '8px',
  margin: '16px',
  padding: '16px',
}));

export const Component = () => {
  return <Wrapper>Lazy Component</Wrapper>;
};
