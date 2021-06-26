import { RangeMap } from 'quick-score';

export type Product = Readonly<{
   name: string;
   nameLong?: string;
   image?: string;
   brand?: string;
   id: ProductId;

   ingredientsText?: string;
   nutritionalText?: string;

   categories: ProductCategory[];
   tags?: string[];
   promotions?: Promotion[] | undefined;

   price: number;
   unit: string;
}>;

export type ProductCategory = Readonly<{
   slug: string;
   name: string;
   id: ProductId;
}>;

export type Cost = Readonly<{
   value: number;
   currency: string;
}>;

export type ProductReference = Readonly<{
   id: ProductId;
}>;

export type SearchResult = ProductReference &
   Readonly<{
      score: number;
      matches: RangeMap;
   }>;

export type ProductId = string | number;

export type Promotion = Readonly<{
   name: string;
   id: ProductId;
   price: number;
   comparePrice: number;
   count: number;
}>