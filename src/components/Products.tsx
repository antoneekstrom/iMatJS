import React, { PropsWithChildren } from 'react';
import useProductQuery from '../hooks/useProductQuery';
import useProducts from '../hooks/useProducts';
import useSearchProduct from '../hooks/useSearchProduct';
import { Product, SearchResult } from '../model/productTypes';
import { Header2, Header3 } from '../style/typography.style';
import ProductDetails, { useModalState } from './ProductDetails';
import ProductGrid from './ProductGrid';

export type ProductsProps = PropsWithChildren<unknown>;

export default function Products({}: ProductsProps) {
   const { tags, searchTerm } = useProductQuery();

   const [detailsState, setDetailsState] = useModalState();

   const results: SearchResult[] = useSearchProduct(searchTerm ?? '', {
      suspense: true,
      id: 'products',
   });
   let products = useProducts(results, { suspense: true, id: 'products' });

   if (tags && tags.length != 0) {
      products = products.filter((product) => product.tags?.some(t => tags.includes(t)));
   }

   return (
      <div className="products">
         <Header3>{products.length} träffar</Header3>
         {searchTerm?.length > 0 && (
            <Header2>Sök resultat för '{searchTerm}'</Header2>
         )}
         <ProductGrid
            products={products}
            onClickTitle={showProductDetails}
            onClickImage={showProductDetails}
         />
         <ProductDetails {...detailsState} onClose={closeProductDetails} />
      </div>
   );

   function showProductDetails(product: Product) {
      setDetailsState({
         product,
         show: true,
      });
   }

   function closeProductDetails() {
      setDetailsState((state) => ({ ...state, show: false }));
   }
}
