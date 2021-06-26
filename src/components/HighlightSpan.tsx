import React, { PropsWithChildren } from 'react';
import { Range, RangeList } from 'quick-score';

export type HighlightSpanProps = {
   string: string
   matches: RangeList
   span?: React.ComponentType<SpanProps>
}

export type SpanProps = PropsWithChildren<{
   range: Range
}>

export default function HighlightSpan({ string, matches, span }: HighlightSpanProps) {
   return (
      <span>
         {highlight(string, matches, span ?? DefaultSpan)}
      </span>
   )

   function DefaultSpan({ children }: SpanProps) {
      return <span>{children}</span>;
   }
}

// derived from example: https://github.com/fwextensions/quick-score
export function highlight(string: string, matches: RangeList, span: React.ComponentType<SpanProps>) {
   const Span = span;
   let substrings = [];
   let previousEnd = 0

   for (const [start, end] of matches) {
      const before = string.substring(previousEnd, start);
      const substring = string.substring(start, end);
      const match = <Span range={[start, end]}>{substring}</Span>;
      
      substrings.push(before, match);
      previousEnd = end;
   }
   substrings.push(string.substring(previousEnd));

   return React.Children.toArray(substrings)
}