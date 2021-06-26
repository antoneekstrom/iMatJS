import { Link } from 'raviger';
import React, { PropsWithChildren } from 'react';
import { formatPrice } from '../common';
import useCart from '../hooks/useCart';
import { CartItem } from '../model/cartTypes';
import { Route } from '../routes';
import { CartButtonStyle } from '../style/buttons.style';
import Icon from './Icon';

export type CartButtonProps = PropsWithChildren<unknown>;

export default function CartButton({}: CartButtonProps) {
   const [cart] = useCart();

   return (
      <Link href={'/checkout' as Route}>
         <CartButtonStyle variant="secondary" as="button" itemCount={totalItems(cart?.items ?? [])}>
            <Icon size={18}>shopping_cart</Icon>
            {cart
               ? `${formatPrice(cart.totalCost.value)}`
               : 'Varukorg'}
         </CartButtonStyle>
      </Link>
   );

   function totalItems(items: CartItem[]) {
      return items.reduce((acc, item) => acc + item.count - 1, items.length)
   }
}
