import ModelDataFactory from './ModelDataFactory';
import ImatModel, { Customer, OrderHistory, Product, ShoppingCart, User } from './types';

export default class ClientSideModel implements ImatModel {
   private constructor(
      private readonly customer: Customer,
      private readonly user: User,
      private readonly cart: ShoppingCart,
      private readonly orderHistory: OrderHistory,
      private readonly products: Product[],
      private readonly favourites: Product[]
   ) {}

   static default(products: Product[]) {
      return new ClientSideModel(
         ModelDataFactory.customer(
            ModelDataFactory.person('Plupp', 'Plupp', new Date(1907, 1, 1), 'Pluppgatan 2'),
            ModelDataFactory.creditCard('plupp', 'plupp', '717272717')
         ),
         ModelDataFactory.user('plupp', 'plupp'),
         ModelDataFactory.cart(),
         ModelDataFactory.orderHistory(),
         products,
         []
      )
   }

   async getFavourites(): Promise<Product[]> {
      return this.favourites
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
}
