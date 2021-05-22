import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
      --c-pm: #CC4202;
      --c-g: #0E8034;
      --c-v0: #FFFFFF;
      --c-v1: #F2EDE9;
      --c-v2: #FDE4CE;
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

   a {
      text-decoration: none;
   }
`;
