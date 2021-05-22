import { Observable } from "rxjs";

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
    * @returns Cart information
    */
   getShoppingCart(): Promise<ShoppingCart>;

   /**
    * @returns Previous orders
    */
   getOrderHistory(): Promise<OrderHistory>;

   /**
    * @returns All products
    */
   getProducts(): Promise<Product[]>;

   /**
    * @returns Favourite products
    */
   getFavourites(): Promise<Product[]>;
}

export type User = Readonly<{
   username: string;
   password: string;
}>;

export type CreditCard = Readonly<{
   cardHoldersName: string;
   cardNumber: string;
   securityCode: string;
}>;

export type ShoppingItem = Readonly<{
   product: Product;
   price: Cost;
   totalCost: Cost;
   amount: number;
   unit: string;
}>;

export type ShoppingCart = Readonly<{
   items: ShoppingItem[];
   totalCost: Cost;
}>;

export type OrderHistory = Readonly<{
   orders: Order[];
}>;

export type Order = Readonly<{
   items: ShoppingItem;
   orderDate: Date;
   deliveryDate: Date;
   cost: Cost;
}>;

export type Product = Partial<
   Readonly<{
      nameShort: string;
      nameLong: string;
      image: string;
      producer: string;
      description: string;
      tags: string[];
   }>
>;

export type Customer = Readonly<{
   creditCard: CreditCard;
   person: Person;
}>;

export type Person = Readonly<{
   firstName: string;
   lastName: string;
   birthDate: Date;
   address: string;
}>;

export type Cost = Readonly<{
   baseValue: number;
   total: number;
   currency: string;
}>