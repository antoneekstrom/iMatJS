import { createGlobalStyle } from 'styled-components';
import { makeMediaQuery } from './mediaQuery';

export default createGlobalStyle`
   :root {
      --c-pm: #CC4202;
      --c-pm-l: #E36E09;
      --c-g: #0E8034;
      --c-g-l: #099660;
      --c-b: #0C79CC;
      --c-v0: #FFFFFF;
      --c-v1: #F2EDE9;
      --c-v2: #FCD6B5;
      --c-v3: #F5E0D6;
   }

   html, body {
      padding: 0;
      margin: 0;
   }
   
   :root, body {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 16px;

      background-color: var(--c-v1);
   }

   h1,h2,h3,h4,h5,p,a {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      margin: 0;
   }

   a, button {
      text-decoration: none;
      cursor: pointer;
   }

   ul, ol {
      margin: 0;
      padding: 0;
      list-style-type: none;
   }

   .page-width {
      margin: auto;
      box-sizing: border-box;
      padding-left: 2rem;
      padding-right: 2rem;
      width: 1160px;
      
      ${makeMediaQuery({ maxWidth: 'large' })} {
         width: 950px;
      }
      ${makeMediaQuery({ maxWidth: 'medium' })} {
         width: 750px;
      }
      ${makeMediaQuery({ maxWidth: 'small' })} {
         width: 1160px;
      }
      ${makeMediaQuery({ maxWidth: 'mobile' })} {
         width: 100vw;
      }
   }
`;
