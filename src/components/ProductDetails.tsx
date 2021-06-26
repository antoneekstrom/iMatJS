import React, { useState } from 'react';
import { formatPrice } from '../common';
import ModelDataFactory from '../model/ModelDataFactory';
import { Product } from '../model/productTypes';
import PriceStyle from '../style/Price.style';
import ProductDetailsStyle from '../style/ProductDetails.style';
import {
   Header2,
   Header3,
   Header4,
   Paragraph,
} from '../style/typography.style';
import Icon from './Icon';
import Modal, { ModalProps } from './Modal';
import ProductTags from './ProductTags';
import { ButtonStyle } from '../style/buttons.style'

export type ProductDetailsProps = ModalProps & {
   product: Product;
};

export function useModalState() {
   return useState<{
      show: boolean;
      product: Product;
   }>({ show: false, product: ModelDataFactory.dummyProduct() });
}

export default function ProductDetails({
   product: {
      name,
      nameLong,
      tags,
      brand,
      image,
      price,
      nutritionalText,
      ingredientsText,
      categories,
   },
   onClose,
   ...props
}: ProductDetailsProps) {
   const close = () => onClose?.();

   return (
      <Modal {...props} onClose={close}>
         <ProductDetailsStyle>
            <ProductImage />
            <CloseButton />
            <div className="text-content">
               <Title />
               <Details />
            </div>
         </ProductDetailsStyle>
      </Modal>
   );

   function Details() {
      return (
         <section className="details">
            <section>
               <Header4>Ingredienser</Header4>
               <Paragraph className="description">{ingredientsText}</Paragraph>
            </section>
            <section>
               <Header4>Fakta</Header4>
               <Paragraph className="description">{nutritionalText}</Paragraph>
            </section>
         </section>
      );
   }

   function Title() {
      return (
         <div>
            <Header2 className="name">{name}</Header2>
            <Header3 color="normal" className="brand">
               {brand}
            </Header3>
            {categories && (
               <ProductTags
                  showAll
                  tags={categories.map(({ name }) => name)}
                  onClick={close}
               />
            )}
            <div className="purchase">
               {price && <PriceStyle large>{formatPrice(price)}</PriceStyle>}
               <ButtonStyle
                  as="button"
                  variant="secondary"
                  //onClick={onClickAddToCart}
               >
                  <Icon size={18}>shopping_cart</Icon>
                  Lägg Till
               </ButtonStyle>
            </div>
         </div>
      );
   }

   function CloseButton() {
      return (
         <div className="close-button" onClick={close}>
            <Icon size={24}>close</Icon>
         </div>
      );
   }

   function ProductImage() {
      return (
         <div
            className="image"
            style={{ backgroundImage: `url("${image}")` }}
         />
      );
   }
}
