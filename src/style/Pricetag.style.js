import styled from 'styled-components'

export default styled.div`
   position: absolute;
   left: 0;
   top: 0;
   //transform: translate(-30%, -30%);
   width: 50%;
   aspect-ratio: 1 / 1;
   background-image: url("/pricetag.svg");
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: var(--c-v1);
   font-family: "Nunito";
   font-weight: 900;
   font-size: 1.2rem;
   line-height: 90%;
   cursor: default;

   .small {
      font-size: 0.9rem;
   }
`