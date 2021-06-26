import { CartItem } from "./cartTypes";
import { Cost } from "./productTypes";

export type User = Readonly<{
   username: string;
   password: string;
}>;

export type CreditCard = Readonly<{
   cardHoldersName: string;
   cardNumber: string;
   securityCode: string;
}>;
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

export type OrderHistory = Readonly<{
   orders: Order[];
}>;

export type Order = Readonly<{
   items: CartItem;
   orderDate: Date;
   deliveryDate: Date;
   cost: Cost;
}>;
