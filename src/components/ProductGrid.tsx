import React from 'react';
import LazyLoad from 'react-lazyload';
import { Product } from '../model/productTypes';
import { LoadingProductCardStyle } from '../style/ProductCard.style';
import ProductGridStyle from '../style/ProductGrid.style';
import NoProducts from './NoProducts';
import ProductCard, { ProductCardProps } from './ProductCard';

export type ProductGridProps = Omit<ProductCardProps, 'product'> & {
   products: Product[];
};

export default function ProductGrid({
   products,
   ...onClickProps
}: ProductGridProps) {
   const cards = products?.map((product) => (
      <LazyProductCard product={product} {...onClickProps} key={product.id} />
   ));

   if (cards.length == 0) {
      cards.push(<NoProducts key="no_products" />);
   }

   return <ProductGridStyle className="product-grid">{cards}</ProductGridStyle>;

   function LazyProductCard({ product, ...onClickProps }: ProductCardProps) {
      return (
         <LazyLoad
            key={product.id}
            placeholder={
               <LoadingProductCardStyle>
                  <img src="/card_loading.svg" />
               </LoadingProductCardStyle>
            }
         >
            <ProductCard product={product} {...onClickProps} />
         </LazyLoad>
      );
   }
}
