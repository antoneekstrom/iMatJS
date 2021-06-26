import React from 'react';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Test from './pages/Test';
import Shopping, { ShoppingProps } from './pages/Shopping';

export const ROUTES = {
   '/': () => <Shopping />,
   '/produkter': () => <Shopping />,
   '/produkter/:category': ({ category }: ShoppingProps) => (
      <Shopping category={category ? decodeURIComponent(category) : undefined} />
   ),
   '/varukorg': () => <Checkout />,
   '/account': () => <Account />,
   '/test': () => <Test />
};

export type Route = keyof typeof ROUTES;
