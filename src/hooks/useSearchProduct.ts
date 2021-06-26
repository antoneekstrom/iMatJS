import useSWR from 'swr';
import { SearchResult } from '../model/productTypes';
import ImatModel from '../model/ImatModel';
import { useImat } from './useImat';

export type UseSearchProductOptions = {
   suspense?: boolean;
   id: string;
};

export default function useSearchProduct(
   searchTerm: string,
   {  suspense, id }: UseSearchProductOptions = {
      id: 'use_search_product',
   }
): SearchResult[] {
   const model = useImat();
   const { data } = useSWR<SearchResult[]>(
      [id, model, searchTerm],
      (_id, model: ImatModel, searchTerm: string) =>
         model.searchProducts(searchTerm),
      {
         suspense: suspense ?? false,
      }
   );

   return data as SearchResult[];
}
