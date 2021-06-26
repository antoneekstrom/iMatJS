import { Link } from 'raviger';
import styled from 'styled-components';
import { makeMediaQuery } from './mediaQuery';

export default styled.header`
   background-color: var(--c-pm);

   > div {
      display: flex;
      flex-direction: row;
      align-items: stretch;

      box-sizing: border-box;

      padding: 0 2rem;
      gap: 3rem;

      nav {
         display: flex;
         flex-direction: row;
         align-items: center;
      }

      .header-logo {
         margin-left: 10px;
      }

      .header-links {
         margin-right: auto;
      }

      .product-search input {
         max-width: auto;
         width: clamp(150px, 50vw, 500px);
      }

      nav > .icon {
         color: var(--c-v0);
         cursor: pointer;
         margin: 0 1rem;
      }

      ${makeMediaQuery({ maxWidth: 'large' })} {
         .product-search {
            display: none;
         }
      }

      ${makeMediaQuery({ maxWidth: 'medium' })} {
         .header-links {
            display: none;
         }

         .header-end {
            margin-left: auto;
         }
      }

      ${makeMediaQuery({ maxWidth: 'mobile' })} {
         .header-end {
            display: none;
         }
      }
   }
`;

export const HeaderLink = styled(Link)`
   color: var(--c-v0);
   font-family: 'Nunito', sans-serif;
   font-size: 16px;
   font-weight: 700;

   cursor: pointer;
   height: 100%;

   display: grid;
   place-items: center;

   padding: 0 1.5rem;
   box-sizing: border-box;

   :hover {
      text-decoration: underline;
      background-color: var(--c-pm-l);
   }
`;
