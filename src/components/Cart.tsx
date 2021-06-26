import React, { PropsWithChildren, Suspense } from 'react'
import useCart from '../hooks/useCart';
import CardStyle from '../style/Card.style';
import { MenuItemStyle, MenuItemText, MenuListStyle } from '../style/menu.style';
import { Header2 } from '../style/typography.style';

export type CartProps = PropsWithChildren<unknown>

export default function Cart({}: CartProps) {
   return (
      <CardStyle as="aside" className="shopping-cart">
         <Header2>Varukorg</Header2>
         <Suspense fallback={<h1>laddar varukorgen...</h1>}>
            <CartItems />
         </Suspense>
      </CardStyle>
   );

   function CartItems() {
      const [cart] = useCart();

      return (
         <MenuListStyle>
            {cart?.items.map(({ product: { name }, count }) => (
               <MenuItemStyle key={name}>
                  <MenuItemText>
                     {name} x{count}
                  </MenuItemText>
               </MenuItemStyle>
            ))}
         </MenuListStyle>
      );
   }
}