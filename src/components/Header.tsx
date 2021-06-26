import { Link } from 'raviger';
import React, { PropsWithChildren } from 'react';
import { Route } from '../routes';
import { ButtonStyle } from '../style/buttons.style';
import HeaderStyle, { HeaderLink } from '../style/Header.style';
import ImatLogoStyle from '../style/ImatLogo.style';
import Icon from './Icon';

export type HeaderProps = PropsWithChildren<unknown>;

export default function Header({}: HeaderProps) {
   return (
      <HeaderStyle>
         <div className="page-width">
            <Link href="/" className="header-logo">
               <ImatLogoStyle>iMat</ImatLogoStyle>
            </Link>
            <nav className="header-links">
               <HeaderLink href={'/products' as Route}>Butik</HeaderLink>
               <HeaderLink href={'/products?tags=erbjudande' as Route}>
                  Erbjudanden
               </HeaderLink>
               <HeaderLink href={'/products?tags=favorit' as Route}>
                  Favoriter
               </HeaderLink>
            </nav>
            <nav className="header-end">
               <Icon size={24}>notifications</Icon>
               <Link href={'/account' as Route}>
                  <ButtonStyle as="button">
                     <Icon size={18}>account_circle</Icon>
                     Konto
                  </ButtonStyle>
               </Link>
            </nav>
         </div>
      </HeaderStyle>
   );
}
