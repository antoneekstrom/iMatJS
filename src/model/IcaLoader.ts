import productsData0 from '../../ica_data/butikens-egna-varor-id_2347/products-data_0.json';
import productsData1 from '../../ica_data/butikens-egna-varor-id_2347/products-data_1.json';
import productsData2 from '../../ica_data/butikens-egna-varor-id_2347/products-data_2.json';
import productsData3 from '../../ica_data/butikens-egna-varor-id_2347/products-data_3.json';
import { Product, ProductCategory, Promotion } from './productTypes';

type ArrayElement<ArrayType extends readonly unknown[]> =
   ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type IcaProduct =
   | ArrayElement<typeof productsData0>
   | ArrayElement<typeof productsData1>
   | ArrayElement<typeof productsData2>
   | ArrayElement<typeof productsData3>;

export default class IcaLoader {
   static load() {
      return [
         ...this.convertProducts(productsData0),
         ...this.convertProducts(productsData1),
         ...this.convertProducts(productsData2),
         ...this.convertProducts(productsData3),
      ];
   }

   private static convertProducts(icaProducts: IcaProduct[]): Product[] {
      return icaProducts.map<Product>((p) => ({
         ...p,
         id: p.sku,
         name: p.name,
         price: p.price,
         unit: p.soldInUnit,
         categories: this.convertCategories(p.inCategories),
         image: this.getImageUrl(p),
         promotions: this.convertPromotions(p.promotions),
      }));
   }

   private static convertPromotions(promotions: IcaProduct['promotions']) {
      return promotions?.remainingPromotions?.map<Promotion>((p) => ({
         id: p.id,
         name: p.name,
         comparePrice: p.comparePrice,
         price: p.price,
         count: p.numberOfItemsInPromotion
      }));
   }

   private static getImageUrl(icaProduct: IcaProduct): string {
      return `/ica_product_images/${icaProduct.slug}.jpg`;
   }

   private static convertCategories(
      categories: IcaProduct['inCategories']
   ): ProductCategory[] {
      return categories.map((c) => ({
         id: c.id,
         name: c.name,
         slug: c.name,
      }));
   }
}
