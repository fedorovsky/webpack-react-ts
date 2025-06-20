import * as React from 'react';
import { styled } from '@pigment-css/react';
import { useTheme } from '@pigment-css/react';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.vars.palette.background,
  color: theme.vars.palette.foreground,
  border: `1px solid ${theme.vars.palette.primary}`,
}));

type HeadingProps = {
  isError?: boolean;
};

const Heading = styled('h1')<HeadingProps>({
  color: ({ isError }) => (isError ? 'red' : 'black'),
});

// const Heading = styled('h1')({
//   color: 'var(--color)',
// });

export const Card = () => {
  const [isError, setError] = React.useState(false);
  const theme = useTheme();

  return (
    <Wrapper>
      <button onClick={() => setError(!isError)}>toggle error</button>
      <Heading isError={isError}>Heading</Heading>
    </Wrapper>
  );
};

// import { useTheme } from '@pigment-css/react';
//
// const Heading: React.FC<{ isError?: boolean }> = ({ isError, children }) => {
//   const theme = useTheme();
//
//   const color = isError ? theme.vars.palette.red : theme.vars.palette.black;
//
//   return (
//     <h1 style={{ color }}>
//       {children}
//     </h1>
//   );
// };
