import React from 'react';
import { IndonesianPage, EnglishPage, RootPage } from './pages/LandingPage';

export const routes = [
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/id',
    element: <IndonesianPage />,
  },
  {
    path: '/en',
    element: <EnglishPage />,
  },
];

export default routes;
