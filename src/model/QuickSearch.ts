import { QuickScore } from 'quick-score';
import { Product, SearchResult } from './productTypes';

export default class QuickSearch {
   static search(searchTerm: string, products: Product[]): SearchResult[] {
      return new QuickScore(products, ['name'])
         .search(searchTerm)
         .map(({ item: { id }, score, matches }) => ({ id, score, matches }));
   }
}
