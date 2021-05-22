import useSWR from 'swr';
import { Product } from '../model/types';
import { useImat } from './useImat';

/**
 *
 * @returns
 */
export default function useProducts(suspense: boolean) {
   const model = useImat();
   const { data } = useSWR<Product[]>(
      ['model', model],
      (_id, model) => model.getProducts(),
      {
         suspense,
      }
   );

   return data;
}
