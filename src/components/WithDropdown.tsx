import React, { PropsWithChildren } from 'react'
import { DropdownStyle, DropdownAnchorStyle } from '../style/dropdown.style'

export type WithDropdownProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
   el: JSX.Element
}>

export default function WithDropdown({ children, el, ...props }: WithDropdownProps) {
   return (
      <DropdownAnchorStyle {...props}>
         {el}
         <DropdownStyle className="dropdown">{children}</DropdownStyle>
      </DropdownAnchorStyle>
   )
}