import { ShoppingCart } from './cartTypes';
import ImatModel from './ImatModel';
import { Customer, OrderHistory, User } from './personalTypes';
import { Product, ProductCategory, ProductReference, SearchResult } from './productTypes';

export default class DelayedModelWrapper implements ImatModel {
   constructor(
      private readonly model: ImatModel,
      private readonly delayRange: [number, number]
   ) {}

   getFavourites(): Promise<Product[]> {
      return this.delay(() => this.model.getFavourites());
   }

   getCustomer(): Promise<Customer> {
      return this.delay(() => this.model.getCustomer());
   }

   getUser(): Promise<User> {
      return this.delay(() => this.model.getUser());
   }

   getShoppingCart(): Promise<ShoppingCart> {
      return this.delay(() => this.model.getShoppingCart());
   }

   getOrderHistory(): Promise<OrderHistory> {
      return this.delay(() => this.model.getOrderHistory());
   }

   getCategories(): Promise<ProductCategory[]> {
      return this.delay(() => this.model.getCategories());
   }

   searchProducts(searchTerm: string, count?: number): Promise<SearchResult[]> {
      return this.delay(() => this.model.searchProducts(searchTerm, count));
   }

   getProductsByReference(references: ProductReference[]): Promise<Product[]> {
      return this.delay(() => this.model.getProductsByReference(references));
   }

   addToCart(product: Product): Promise<ShoppingCart> {
      return this.delay(async () => this.model.addToCart(product));
   }

   private async delay<T>(producer: () => Promise<T>): Promise<T> {
      await DelayedModelWrapper.sleep(this.getRandomDelayInRange());
      return producer();
   }

   private getRandomDelayInRange(): number {
      const [min, max] = this.delayRange;
      const r = Math.random();
      return min + r * (max - min);
   }

   static sleep(time: number): Promise<void> {
      return new Promise((resolve) => {
         setTimeout(() => resolve(), time);
      });
   }
}
