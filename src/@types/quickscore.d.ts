
/**
 * Manually added type definitions for quick-score.
 */
declare module 'quick-score' {

   const quickScore: unknown;

   type Range = [number, number];

   type RangeList = Range[]

   type RangeMap = {[key: string]: RangeList}

   type QuickScoreResult<T, M extends RangeList | RangeMap = RangeMap> = {
      item: T
      score: number
      matches: M
   }

   export class QuickScore<T = string, M extends RangeList | RangeMap = RangeMap> {
      constructor(entries: T[], keys?: (keyof T)[])
      search(term: string): QuickScoreResult<T, M>[]
   }

}