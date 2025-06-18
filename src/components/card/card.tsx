import * as React from 'react';
import { styled } from '@pigment-css/react';

const Wrapper = styled('div')({
  backgroundColor: 'var(--palette-primary)',
  border: '1px solid red',
});

export const Card = () => {
  return <Wrapper>Card</Wrapper>;
};
