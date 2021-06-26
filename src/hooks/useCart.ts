import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import ModelDataFactory from '../model/ModelDataFactory';
import { ShoppingCart } from '../model/cartTypes';
import { useImat } from './useImat';
import { Product } from '../model/productTypes';

const cartState = atom<ShoppingCart | undefined>({
   key: 'cartState',
   default: ModelDataFactory.cart([]),
});

export default function useCart(
   imat = useImat()
): [ShoppingCart | undefined, typeof functions] {
   const [cart, setCart] = useRecoilState(cartState);

   useEffect(() => {
      imat.getShoppingCart().then((cart) => setCart(cart));
   }, []);

   async function addToCart(product: Product) {
      setCart(await imat.addToCart(product));
   }

   const functions = {
      addToCart: (product: Product) => addToCart(product),
   };

   return [cart, functions];
}
