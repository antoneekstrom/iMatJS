import { navigate } from 'raviger';
import ProductQueryBuilder from '../model/ProductQueryBuilder';

export default class Navigator {
   static search(searchTerm: string) {
      navigate(ProductQueryBuilder.base().search(searchTerm).toString());
   }
   static viewProducts(query: ProductQueryBuilder) {
      navigate(query.toString());
   }
}
