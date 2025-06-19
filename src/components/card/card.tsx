import * as React from 'react';
import { styled } from '@pigment-css/react';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.vars.palette.background,
  color: theme.vars.palette.foreground,
  border: `1px solid ${theme.vars.palette.primary}`,
}));

export const Card = () => {
  return <Wrapper>Card</Wrapper>;
};
