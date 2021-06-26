import React, { PropsWithChildren } from 'react';
import CardStyle from '../style/Card.style';
import { Header2 } from '../style/typography.style';

export type NoProductsProps = PropsWithChildren<unknown>;

export default function NoProducts({}: NoProductsProps) {
   return (
      <CardStyle style={{
         gridColumn: '1 / span 4',
         padding: '1rem'
      }}>
         <Header2>inga varor 😭😭</Header2>
         <img src="/apa.gif" />
      </CardStyle>
   );
}
