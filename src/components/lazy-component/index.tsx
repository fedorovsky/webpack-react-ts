import * as React from 'react';

const Component = React.lazy(() =>
  import('./component').then((module) => ({ default: module.Component })),
);

export const LazyComponent = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  )
};
