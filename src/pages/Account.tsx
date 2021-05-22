import React, { PropsWithChildren } from 'react'
import { Header1, Header2, Header3 } from '../style/typography.style'

export type AccountProps = PropsWithChildren<unknown>

export default function Account({}: AccountProps) {
   return (
      <main>
         <Header1>Header1</Header1>
         <Header2>Header2</Header2>
         <Header3>Header3</Header3>
      </main>
   )
}