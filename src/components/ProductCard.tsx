import React from 'react';
import { formatPrice } from '../common';
import useCart from '../hooks/useCart';
import { Product } from '../model/productTypes';
import { ButtonStyle } from '../style/buttons.style';
import PriceStyle from '../style/Price.style';
import PricetagStyle from '../style/Pricetag.style';
import ProductCardStyle from '../style/ProductCard.style';
import { Header3, Header4 } from '../style/typography.style';
import Icon from './Icon';

type ProductOnClick = (product: Product) => void;

export type ProductCardProps = {
   product: Product;
   onClickCard?: ProductOnClick;
   onClickTitle?: ProductOnClick;
   onClickImage?: ProductOnClick;
};

export default function ProductCard({
   product,
   onClickCard,
   onClickTitle,
   onClickImage,
}: ProductCardProps) {
   const { name, image, tags, brand, price, unit, promotions } = product;
   const [, { addToCart }] = useCart();

   return (
      <ProductCardStyle onClick={() => onClickCard?.(product)}>
         <PromotionTag />
         <ProductImage />
         <CardText />
         <PurchaseButton />
      </ProductCardStyle>
   );

   function PromotionTag() {
      if (promotions && promotions.length > 0) {
         const { price, count } = promotions[0];
         return (
            <PricetagStyle>
               <span className="small">{count} för</span>
               {price && price + ':-'}
            </PricetagStyle>
         );
      }
      return <></>;
   }

   function ProductImage() {
      return (
         <div
            className="card-image"
            style={{ backgroundImage: `url("${image}")` }}
            onClick={() => onClickImage?.(product)}
         />
      );
   }

   function CardText() {
      return (
         <div className="card-content">
            <Header3
               className="card-title"
               onClick={() => onClickTitle?.(product)}
            >
               {name}
            </Header3>
            <Header4>{brand}</Header4>
            {price && <PriceStyle>{formatPrice(price)}</PriceStyle>}
         </div>
      );
   }

   function PurchaseButton() {
      return (
         <ButtonStyle
            as="button"
            className="card-add-button"
            variant="secondary"
            onClick={onClickAddToCart}
         >
            <Icon size={18}>shopping_cart</Icon>
            Lägg Till
         </ButtonStyle>
      );
   }

   function onClickAddToCart(e: React.MouseEvent) {
      e.stopPropagation();
      addToCart(product);
   }
}
