import React from 'react';
import { IndonesianPage, EnglishPage, RootPage } from './pages/LandingPage';
import CommodityPage from './pages/CommodityPage';
import { COMMODITY_SLUGS } from './config/commodities';

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
  ...COMMODITY_SLUGS.map((slug) => ({
    path: `/produk/${slug}`,
    element: <CommodityPage slug={slug} />,
  })),
  {
    path: '/produk/:slug',
    element: <CommodityPage />,
  },
];

export default routes;
