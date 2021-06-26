import React, { Suspense } from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import Products from '../components/Products';
import ProductSearch from '../components/ProductSearch';
import ModelDataFactory from '../model/ModelDataFactory';
import { ProductCategory } from '../model/productTypes';
import ShoppingStyle from '../style/Shopping.style';
import { Header1 } from '../style/typography.style';

export type ShoppingProps = {
   category?: string | undefined;
};

export default function Shopping({ category }: ShoppingProps) {
   return (
      <ShoppingStyle className="page-width">
         <nav className="product-nav">
            <ProductSearch className="product-search" />
            <CartButton />
         </nav>
         <Categories />
         <Content category={category ? ModelDataFactory.category(category) : undefined} />
      </ShoppingStyle>
   );
}

function Content({ category }: {category: ProductCategory | undefined}) {
   return (
      <main>
         <Header1>
            {category ? category.name : 'Produkter'}
         </Header1>
         <Suspense fallback={<div>hämtar produkter...</div>}>
            <Products />
         </Suspense>
      </main>
   );
}