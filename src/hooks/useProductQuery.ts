import { usePath, useQueryParams } from 'raviger';
import ProductQueryBuilder from '../model/ProductQueryBuilder';

export default function useProductQuery(): ProductQueryBuilder {
   const path = decodeURIComponent(usePath());
   const [params] = useQueryParams();
   const tags = params[ProductQueryBuilder.TAGS] ?? '';
   const searchTerm = params[ProductQueryBuilder.SEARCH] ?? '';

   return ProductQueryBuilder.from(new URL(window.location.origin + path))
      .appendTags(...tags.split(ProductQueryBuilder.TAG_SEPARATOR))
      .search(searchTerm);
}
