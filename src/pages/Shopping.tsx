import React, { PropsWithChildren, Suspense } from 'react';
import useProducts from '../hooks/useProducts';
import useTags from '../hooks/useTags';

export type ShoppingProps = PropsWithChildren<unknown>;

export default function Shopping({}: ShoppingProps) {
   return (
      <main>
         <h1>butik</h1>
         <Suspense fallback={<div>hämtar produkter...</div>}>
            <Products />
         </Suspense>
      </main>
   );
}

function Products() {
   const products = useProducts(true);
   const tags = useTags();

   return (
      <ol>
         {products
            ?.filter((product) => product.tags?.includes(tags[0]))
            ?.map((product) => (
               <li key={product.nameShort}>
                  <p>{product.nameShort}</p>
               </li>
            ))}
      </ol>
   );
}
