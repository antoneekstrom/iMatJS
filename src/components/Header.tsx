import { Link } from 'raviger';
import React, { PropsWithChildren } from 'react';
import { Path } from '../routes';
import HeaderStyle, { HeaderLink } from '../style/Header.style';
import ImatLogoStyle from '../style/ImatLogo.style';
import ProductSearch from './ProductSearch';

export type HeaderProps = PropsWithChildren<unknown>;

export default function Header({}: HeaderProps) {
   return (
      <HeaderStyle>
         <Link href="/">
            <ImatLogoStyle>iMat</ImatLogoStyle>
         </Link>
         <nav>
            <HeaderLink href={'/products' as Path}>Butik</HeaderLink>
            <HeaderLink href={'/products?tags=erbjudande' as Path}>Erbjudanden</HeaderLink>
            <HeaderLink href={'/products?tags=favourite' as Path}>Favoriter</HeaderLink>
            <ProductSearch />
         </nav>
         <nav className="far">
            <Link href={'/checkout' as Path}>
               <button>Varukorg</button>
            </Link>
            <Link href={'/account' as Path}>
               <button>Konto</button>
            </Link>
         </nav>
      </HeaderStyle>
   );
}
