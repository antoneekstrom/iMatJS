import useSWR from 'swr';
import { Product, ProductReference } from '../model/productTypes';
import ImatModel from '../model/ImatModel';
import { useImat } from './useImat';

export type UseProductOptions = {
   suspense?: boolean;
   id: string;
};

export default function useProducts(
   references: ProductReference[],
   { suspense, id }: UseProductOptions = { id: 'use_products' }
): Product[] {
   const model = useImat();
   const { data } = useSWR<Product[]>(
      [id, model, references],
      (_id, model: ImatModel, references: ProductReference[]) =>
         model.getProductsByReference(references),
      {
         suspense: suspense ?? false,
      }
   );

   return data as Product[];
}
