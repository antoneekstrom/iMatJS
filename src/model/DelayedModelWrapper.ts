import ImatModel, { Customer, OrderHistory, Product, ShoppingCart, User } from './types';

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

   getProducts(): Promise<Product[]> {
      return this.delay(() => this.model.getProducts());
   }

   private getRandomDelayInRange(): number {
      const [min, max] = this.delayRange
      const r = Math.random();
      return min + r * (max - min)
   }

   private async delay<T>(producer: () => Promise<T>): Promise<T> {
      await DelayedModelWrapper.sleep(this.getRandomDelayInRange())
      return producer();
   }

   private static sleep(time: number): Promise<void> {
      return new Promise((resolve) => {
         setTimeout(() => resolve(), time);
      });
   }
}
