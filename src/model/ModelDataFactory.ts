import { CartItem, ShoppingCart } from "./cartTypes";
import { CreditCard, Customer, Order, OrderHistory, Person, User } from "./personalTypes";
import { Cost, Product, ProductCategory } from "./productTypes";

/**
 * Creates parts of the model.
 */
export default class ModelDataFactory {

   static person(firstName: string, lastName: string, birthDate: Date, address: string): Person {
      return {
         firstName,
         lastName,
         birthDate,
         address
      }
   }

   static customer(person: Person, creditCard: CreditCard): Customer {
      return {
         person,
         creditCard
      };
   }

   static creditCard(name: string, number: string, cvc: string): CreditCard {
      return {
         cardHoldersName: name,
         cardNumber: number,
         securityCode: cvc
      };
   }

   static user(username: string, password: string): User {
      return {
         username,
         password
      }
   }

   static cart(items: CartItem[] = []): ShoppingCart {
      return {
         items,
         totalCost: this.price(items.reduce((total, item) => total + item.totalCost.value, 0))
      }
   }

   static orderHistory(orders: Order[] = []): OrderHistory {
      return {
         orders
      }
   }

   static price(value: number, currency: string = 'kr'): Cost {
      return {
         value,
         currency
      }
   }

   static cartItem(product: Product, count = 1): CartItem {
      return {
         product,
         count,
         totalCost: this.price(product.price ?? 0 * count)
      }
   }

   static category(name: string, slug = name, id = name): ProductCategory {
      return {
         name, id, slug
      }
   }

   static dummyProduct(): Product {
      return {
         id: -1,
         categories: [],
         name: "PLUPP",
         price: 2,
         unit: "plupps"
      }
   }

}
