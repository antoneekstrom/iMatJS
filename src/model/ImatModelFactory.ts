import ClientSideModel from './ClientSideModel';
import ImatModel, { Product } from './types';

export default class ImatModelFactory {
   static clientside(products: Product[]): ImatModel {
      return ClientSideModel.default(products);
   }
}
