import React, { PropsWithChildren, useState } from 'react'
import ModalStyle from '../style/Modal.style'

export type ModalProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & PropsWithChildren<{
   show: boolean;
   onClose?: () => void;
}>

export default function Modal({ children, show, onClose, ...props }: ModalProps) {
   return show ? (
      <ModalStyle {...props} onClick={onClickOutside}>
         <div className="modal-inner" onClick={onClickInside}>
            {children}
         </div>
      </ModalStyle>
   ) : <React.Fragment/>

   function onClickInside(e: React.MouseEvent) {
      e.stopPropagation();
   }

   function onClickOutside(e: React.MouseEvent) {
      onClose?.();
   }
}