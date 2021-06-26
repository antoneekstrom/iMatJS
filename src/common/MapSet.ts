
export type ToString = {
   toString: () => string
}

export default class DeepSet<T extends ToString> implements Iterable<T> {
   map: Map<string, T>;

   constructor() {
      this.map = new Map<string, T>();
   }

   [Symbol.iterator] = this.values;

   add(item: T) {
      this.map.set(item.toString(), item);
   }

   values() {
      return this.map.values();
   }

   delete(item: T) {
      return this.map.delete(item.toString());
   }
}