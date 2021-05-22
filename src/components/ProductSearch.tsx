import React, { PropsWithChildren } from 'react';

export type ProductSearchProps = PropsWithChildren<unknown>;

export default function ProductSearch({}: ProductSearchProps) {
   return <input placeholder="sök bland alla varor" />;
}
