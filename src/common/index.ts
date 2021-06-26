export function formatPrice(price: number) {
   const biggie = price.toFixed(0);
   const smalls = (price % 1).toFixed(2).slice(2);
   return `${biggie}:${smalls}`;
}
export function randomKey() {
   return Math.random().toString(16);
}
export function isDefined<T>(value: T | undefined): value is T {
   return value != undefined;
}
export function arraysEqual<T>(a: T[], b: T[], eq = (a: T, b: T) => a == b) {
   if (a == b) {
      return true;
   }

   if (a.length != b.length) {
      return false;
   }

   for (let i = 0; i < a.length; i++) {
      if (!eq(a[i], b[i])) {
         return false;
      }
   }

   return true;
}
export function arraysSameElements<T>(
   a: T[],
   b: T[],
   eq = (a: T, b: T) => a == b
) {
   return (
      a.every((a) => b.some((b) => eq(a, b))) &&
      b.every((b) => a.some((a) => eq(b, a)))
   );
}
