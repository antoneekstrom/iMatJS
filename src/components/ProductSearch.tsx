import { useQueryParams } from 'raviger';
import React, { Suspense } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formatPrice, randomKey } from '../common';
import Navigator from '../common/Navigator';
import useSearchProduct from '../hooks/useSearchProduct';
import { Product, ProductReference, SearchResult } from '../model/productTypes';
import { ButtonStyle } from '../style/buttons.style';
import {
   MenuItemStyle,
   MenuItemText,
   MenuListStyle,
} from '../style/menu.style';
import PillStyle from '../style/Pill.style';
import PriceStyle from '../style/Price.style';
import { SpanMatching } from '../style/span.style';
import HighlightSpan from './HighlightSpan';
import Icon from './Icon';
import NoProducts from './NoProducts';
import ProductTags from './ProductTags';
import WithDropdown from './WithDropdown';
import useProducts from '../hooks/useProducts';

export type ProductSearchProps = React.HTMLAttributes<HTMLDivElement>;

export type ProductListProps = {
   searchTerm: string;
   onClick: (product: Product) => void;
};

type Inputs = {
   searchTerm: string;
};

type ProductResultProps = {
   result: SearchResult;
   product: Product;
   onClick: ProductListProps['onClick'];
};

export default function ProductSearch({ ...props }: ProductSearchProps) {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors }, // TODO
      setValue,
   } = useForm<Inputs>();

   const [{ search }] = useQueryParams();

   const searchTerm = watch('searchTerm');

   const onSubmit: SubmitHandler<Inputs> = ({ searchTerm }) => {
      setValue('searchTerm', '');
      Navigator.search(searchTerm);
   };

   return (
      <WithDropdown
         {...props}
         el={
            <PillStyle
               as="form"
               className="pill-wrapper"
               onSubmit={handleSubmit(onSubmit)}
            >
               <SearchIconButton />
               <input
                  type="text"
                  placeholder="sök bland alla varor"
                  defaultValue={search}
                  {...register('searchTerm')}
                  autoComplete="off"
               />
            </PillStyle>
         }
      >
         <Suspense fallback={<p>searching...</p>}>
            <ProductList
               searchTerm={searchTerm ?? ''}
               onClick={({ name }) => {
                  if (name) {
                     setValue('searchTerm', '');
                     Navigator.search(name);
                  }
               }}
            />
         </Suspense>
      </WithDropdown>
   );

   function SearchIconButton() {
      return (
         <ButtonStyle style={{ padding: '0.3rem' }} as="button" type="submit">
            <Icon size={18}>search</Icon>
         </ButtonStyle>
      );
   }
}

function ProductList({ searchTerm, onClick }: ProductListProps) {
   const results = useSearchProduct(searchTerm, { suspense: true, id: 'products' });
   const products = useProducts(results, { suspense: true, id: 'products' });

   if (results.length == 0) {
      return <NoProducts />;
   }

   return (
      <MenuListStyle>
         <p>{products.length} träffar</p>
            {products.slice(0, 5).map((product, i) => (
               <Suspense fallback={<p>plupp...</p>} key={product.id}>
                  <ProductResult result={results[i]} product={product} onClick={onClick} />
               </Suspense>
            ))}
      </MenuListStyle>
   );
}

function ProductResult({
   product,
   onClick,
   result
}: ProductResultProps) {
   return (
      <MenuItemStyle
         as="button"
         key={randomKey()}
         onClick={() => onClick?.(product)}
      >
         {product?.name && (
            <MenuItemText>
               <HighlightSpan
                  matches={result.matches['name']}
                  string={product.name}
                  span={SpanMatching}
               />
            </MenuItemText>
         )}
         <ProductTags max={1} tags={product?.tags ?? []} showAll />
         {product.price && (
            <PriceStyle>{formatPrice(product.price)}</PriceStyle>
         )}
      </MenuItemStyle>
   );
}
