import { ShoppingCart } from './cartTypes';
import { Customer, OrderHistory, User } from './personalTypes';
import { Product, ProductCategory, ProductReference, SearchResult } from './productTypes';

// 1. Set state with updated copy of the whole model
// - Updates whole state unnecessarily
// + I've done it before
// + Consequent for every part of the state

// 2. Store "reactive" state (such as cart) in separate state, return copy from functions and set state
// + Does not require a lot of refactoring
// + Can be incrementally applied to parts that need it

// 3. Observe shopping cart for changes and set state in listener
// - Observing state does not feel react-ish

// 4. Observe whole state for changes and set state in listener
// - not good idea tbh

/**
 * Data model for the iMat application.
 *
 * Getters return immutable snapshots of the state.
 */
export default interface ImatModel {
   /**
    * @returns Customer information
    */
   getCustomer(): Promise<Customer>;

   /**
    * @returns User information
    */
   getUser(): Promise<User>;

   /**
    * @returns Favourite products
    */
   getFavourites(): Promise<Product[]>;

   /**
    * @returns Cart information
    */
   getShoppingCart(): Promise<ShoppingCart>;

   /**
    * @returns Previous orders
    */
   getOrderHistory(): Promise<OrderHistory>;

   /**
    * @returns All product categories
    */
   getCategories(): Promise<ProductCategory[]>;

   /**
    * @param searchTerm which products to search for
    * @param count how many products to return
    * @returns Products that match the search term
    */
   searchProducts(searchTerm: string, count?: number): Promise<SearchResult[]>;

   /**
    * @returns Products
    */
   getProductsByReference(references: ProductReference[]): Promise<Product[]>;

   /**
    *
    * @param product
    */
   addToCart(product: Product): Promise<ShoppingCart>;
}
