import { Cost, Product } from './productTypes';

export type CartItem = Readonly<{
   product: Product;
   totalCost: Cost;
   count: number;
}>;

export type ShoppingCart = Readonly<{
   items: CartItem[];
   totalCost: Cost;
}>;
