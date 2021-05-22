import { Cost, CreditCard, Customer, Order, OrderHistory, Person, ShoppingCart, ShoppingItem, User } from './types';

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

   static cart(items: ShoppingItem[] = []): ShoppingCart {
      return {
         items,
         totalCost: this.cost(items.reduce((total, item) => total + item.totalCost.total, 0))
      }
   }

   static orderHistory(orders: Order[] = []): OrderHistory {
      return {
         orders
      }
   }

   static cost(baseValue: number, currency: string = 'kr'): Cost {
      return {
         baseValue,
         currency,
         total: baseValue
      }
   }

}
