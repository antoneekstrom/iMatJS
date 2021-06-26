import ClientSideModel from './ClientSideModel';
import ImatModel from './ImatModel';
import { Product } from './productTypes';

export default class ImatModelFactory {
   static clientside(products: Product[]): ImatModel {
      return ClientSideModel.default(products);
   }
}
