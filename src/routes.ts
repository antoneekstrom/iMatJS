import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Shopping from './pages/Shopping';

export const ROUTES = {
   '/': Shopping,
   '/products': Shopping,
   '/checkout': Checkout,
   '/account': Account,
};

export type Path = keyof typeof ROUTES