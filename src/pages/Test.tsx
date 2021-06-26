import React, { PropsWithChildren } from 'react';
import { Header3 } from '../style/typography.style';

export type TestProps = PropsWithChildren<unknown>;

export default function Test({}: TestProps) {
   return (
      <main>
         <Header3>
            test
         </Header3>
      </main>
   );
}
