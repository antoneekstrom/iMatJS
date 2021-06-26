import styled from 'styled-components';
import { makeMediaQuery } from './mediaQuery';
import PageStyle from './Page.style';

export default styled(PageStyle)`
   --grid-columns: 4;

   display: grid;
   justify-content: center;
   grid-template-rows: min-content minmax(0, 1fr);
   grid-template-columns: 250px 1fr;
   gap: 2rem;

   padding: 1rem;
   box-sizing: border-box;

   .product-nav {
      grid-area: 1 / span 2;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      .product-search {
         flex-grow: 1;
         input {
            width: 100%;
            margin: 0;
         }
      }
   }

   .shopping-cart,
   .shopping-categories {
      position: sticky;
      top: 1rem;
      padding: 1rem;

      ol {
         padding-top: 0.5rem;
         padding-bottom: 1rem;
      }
   }

   .products {
      .product-grid {
         grid-template-columns: repeat(var(--grid-columns), 190px);
      }
   }

   ${makeMediaQuery({ maxWidth: 'large' })} {
      --grid-columns: 3;
   }
   ${makeMediaQuery({ maxWidth: 'medium' })} {
      --grid-columns: 2;
   }
   ${makeMediaQuery({ maxWidth: 'mobile' })} {
      grid-template-columns: 1fr;
      .shopping-categories-anchor {
         display: none;
      }
      main {
         width: 100%;
         display: flex;
         flex-direction: column;
         place-items: center;
      }
      --grid-columns: 1;
   }
`;
