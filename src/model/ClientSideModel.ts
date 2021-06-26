import { CartItem, ShoppingCart } from './cartTypes';
import ModelDataFactory from './ModelDataFactory';
import { Customer, OrderHistory, User } from './personalTypes';
import {
   Product,
   ProductCategory,
   ProductReference,
   SearchResult,
} from './productTypes';
import ImatModel from './ImatModel';
import { isDefined } from '../common/index';
import QuickSearch from './QuickSearch';
import MapSet, { ToString } from '../common/MapSet';

export default class ClientSideModel implements ImatModel {
   private constructor(
      private customer: Customer,
      private user: User,
      private cart: ShoppingCart,
      private orderHistory: OrderHistory,
      private products: Product[],
      private favourites: Product[]
   ) {
      this.products = ClientSideModel.filterIds(this.products);
   }

   static filterIds(products: Product[]): Product[] {
      return products.filter(({ id }) => id != undefined); // Discards products without an ID, not my problem!!
   }

   static default(products: Product[]) {
      return new ClientSideModel(
         ModelDataFactory.customer(
            ModelDataFactory.person(
               'Plupp',
               'Plupp',
               new Date(1907, 1, 1),
               'Pluppgatan 2'
            ),
            ModelDataFactory.creditCard('plupp', 'plupp', '717272717')
         ),
         ModelDataFactory.user('plupp', 'plupp'),
         ModelDataFactory.cart(),
         ModelDataFactory.orderHistory(),
         products,
         []
      );
   }

   async getFavourites(): Promise<Product[]> {
      return this.favourites;
   }

   async getProducts(): Promise<Product[]> {
      return this.products;
   }

   async getCustomer(): Promise<Customer> {
      return this.customer;
   }

   async getUser(): Promise<User> {
      return this.user;
   }

   async getShoppingCart(): Promise<ShoppingCart> {
      return this.cart;
   }

   async getOrderHistory(): Promise<OrderHistory> {
      return this.orderHistory;
   }

   async getCategories(): Promise<ProductCategory[]> {
      const set = new MapSet<ProductCategory & ToString>();
      for (const product of await this.getProducts()) {
         for (const category of product.categories) {
            const toString = ({ id }: ProductCategory) =>
               typeof id == 'string' ? id : id.toString();
            set.add({ ...category, toString: () => toString(category) });
         }
      }
      return [...set];
   }

   async filterByCategory(products: Product[], category: ProductCategory) {
      const categoriesEqual = (a: ProductCategory, b: ProductCategory) =>
         a.id == b.id;
      return products.filter((p) =>
         p.categories.some((a) => categoriesEqual(a, category))
      );
   }

   async searchProducts(
      searchTerm: string,
      count?: number
   ): Promise<SearchResult[]> {
      const items = QuickSearch.search(searchTerm, await this.getProducts());
      return count ? items.slice(0, count) : items;
   }

   async getProductsByReference(
      references: ProductReference[]
   ): Promise<Product[]> {
      const products = await this.getProducts();
      const mapped: (Product | undefined)[] = references.map((ref) =>
         products.find((product) => ref.id == product.id)
      );
      const filtered = mapped.filter(isDefined);
      return filtered;
   }

   async addToCart(product: Product): Promise<ShoppingCart> {
      const [item, index] = this.findProductInCart(product);
      if (item && index != undefined) {
         const mutated = ModelDataFactory.cartItem(product, item.count + 1);
         this.cart = ModelDataFactory.cart(
            this.cart.items.map((item, i) => (i == index ? mutated : item))
         );
      } else {
         this.cart = ModelDataFactory.cart([
            ...this.cart.items,
            ModelDataFactory.cartItem(product),
         ]);
      }
      return this.cart;
   }

   private findProductInCart(
      product: Product
   ): [CartItem | undefined, number | undefined] {
      const item = this.cart.items.find(
         ({ product: { id } }) => product.id == id
      );
      return [item, item && this.cart.items.indexOf(item)];
   }
}
