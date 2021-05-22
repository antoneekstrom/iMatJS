import { Product } from "./types";

export type ProductsJsonSchema = {
   products: Product[]
}

export default class ProductLoader {

   static parse(json: string): Product[] {
      const data: ProductsJsonSchema = JSON.parse(json);
      return data.products
   }

}