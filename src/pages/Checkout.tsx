import React, { PropsWithChildren } from 'react'

export type CheckoutProps = PropsWithChildren<unknown>

export default function Checkout({}: CheckoutProps) {
   return (
      <main>
         <h1>checkout</h1>
      </main>
   )
}