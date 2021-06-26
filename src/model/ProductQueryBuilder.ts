import { arraysEqual, arraysSameElements, isDefined } from '../common';

/**
 * Parses and builds URLs for querying the products page.
 */
export default class ProductQueryBuilder {
   static readonly SEPARATOR = '/';
   static readonly TAGS = 'tags';
   static readonly TAG_SEPARATOR = ',';
   static readonly SEARCH = 'search';
   static readonly PRODUCTS = 'produkter';

   private constructor(
      private _categories: string[],
      private _tags: string[],
      private _searchTerm: string | undefined | null
   ) {}

   static from(url: URL) {
      return new ProductQueryBuilder(
         ProductQueryBuilder.getCategories(url),
         ProductQueryBuilder.getTags(url),
         ProductQueryBuilder.getSearchTerm(url)
      );
   }

   static base(): ProductQueryBuilder {
      return ProductQueryBuilder.from(this.getBaseUrl());
   }

   static current(): ProductQueryBuilder {
      return ProductQueryBuilder.from(this.getCurrentUrl());
   }

   static getCategories(url: URL): string[] {
      return this.sanitize(url.pathname.split(/\/|\\/)).splice(1);
   }

   static getTags(url: URL): string[] {
      const urlTags = url.searchParams.get(ProductQueryBuilder.TAGS);
      if (urlTags && urlTags.length > 0) {
         return urlTags.split(ProductQueryBuilder.TAG_SEPARATOR);
      }
      return [];
   }

   static getSearchTerm(url: URL) {
      return url.searchParams.get(ProductQueryBuilder.SEARCH);
   }

   static equal(a: ProductQueryBuilder, b: ProductQueryBuilder, compareTags = true) {
      const categoriesEqual = arraysEqual(a._categories, b._categories);
      const tagsEqual = !compareTags || arraysSameElements(a._tags, b._tags);
      const searchTermEqual = a.searchTerm == b.searchTerm;
      return categoriesEqual && tagsEqual && searchTermEqual;
   }

   static getBaseUrl() {
      const url = new URL(window.location.origin);
      url.pathname = `/${ProductQueryBuilder.PRODUCTS}/`;
      return url;
   }

   static getCurrentUrl() {
      return new URL(window.location.href);
   }

   private static sanitize(strings: (string | undefined)[]): string[] {
      const isOnlySpaces = (s: string) => s.split('').every((s) => s == ' ');
      const removeInitialSpaces = (s: string) => s.replace(/^\s+/, '');
      return strings
         .filter(isDefined)
         .filter((s) => s.length > 0 && !isOnlySpaces(s))
         .map(removeInitialSpaces)
         .map(decodeURIComponent);
   }

   search(searchTerm: string): ProductQueryBuilder {
      this._searchTerm = searchTerm;
      return this;
   }

   appendCategories(...categories: (string | undefined)[]): ProductQueryBuilder {
      this._categories = [
         ...this._categories,
         ...ProductQueryBuilder.sanitize(categories),
      ];
      return this;
   }

   appendTags(...tags: (string | undefined)[]): ProductQueryBuilder {
      this._tags = [...this._tags, ...ProductQueryBuilder.sanitize(tags)];
      return this;
   }

   toURL(): URL {
      const { _categories, _tags, _searchTerm } = this;
      const url = ProductQueryBuilder.getBaseUrl();

      const categoryStr = _categories.join(ProductQueryBuilder.SEPARATOR);
      url.pathname = `/${ProductQueryBuilder.PRODUCTS}/${categoryStr}`;

      if (_tags.length > 0) {
         const tagStr = _tags.join(ProductQueryBuilder.TAG_SEPARATOR);
         url.searchParams.set(ProductQueryBuilder.TAGS, tagStr);
      }

      if (_searchTerm && _searchTerm.length > 0) {
         url.searchParams.set(ProductQueryBuilder.SEARCH, _searchTerm);
      }

      return url;
   }

   toString(): string {
      return decodeURIComponent(this.toURL().toString());
   }

   copy(): ProductQueryBuilder {
      return ProductQueryBuilder.from(this.toURL());
   }

   get url() {
      return this.toURL();
   }

   get string() {
      return this.toString();
   }

   get categories() {
      return this._categories;
   }

   get tags() {
      return this._tags;
   }

   get searchTerm(): string {
      return this._searchTerm ?? '';
   }
}
