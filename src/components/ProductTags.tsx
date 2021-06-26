import React from 'react';
import { randomKey } from '../common';
import Navigator from '../common/Navigator';
import ProductQueryBuilder from '../model/ProductQueryBuilder';
import TagStyle, { ProductTagsStyle } from '../style/Tag.style';

export type ProductTagProps = React.HTMLAttributes<HTMLUListElement> & {
   tags: string[];
   max?: number;
   showAll?: unknown;
};

export default function ProductTags({ tags, max, showAll, ...props }: ProductTagProps) {
   if (!showAll) {
      tags = tags.filter((tag) => !/favorit|erbjudande/.test(tag));
   }
   return (
      <ProductTagsStyle
         {...props}
         className="product-tags"
         onClick={(e) => e.stopPropagation()}
      >
         {tags.slice(0, max).map((tag) => (
            <TagStyle
               key={randomKey()}
               onClick={() => onClick(tag)}
            >
               {tag}
            </TagStyle>
         ))}
      </ProductTagsStyle>
   );

   function onClick(tag: string) {
      Navigator.viewProducts(ProductQueryBuilder.base().appendCategories(tag))
   }
}
