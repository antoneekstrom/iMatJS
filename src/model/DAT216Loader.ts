import { Product } from "./productTypes";
import { products } from "../../public/data/products_dat216.json";

export default class DAT216Loader {

    static load(): Product[] {
        return products.map(({ ...data }) => ({
            categories: [],
            ...data
        }))
    }

}