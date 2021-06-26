import styled from 'styled-components'
import CardStyle from './Card.style'

export default styled(CardStyle)`
   width: clamp(500px, 70vw, 1000px);
   aspect-ratio: 1.618 / 1;
   padding: 3rem;

   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr;

   position: relative;

   .name {
      line-height: 110%;
   }

   .brand {
      margin: .5rem 0;
      font-size: 1.2rem;
   }

   .purchase {
      margin: 2rem 0;
   }

   .image {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      place-self: center;
      grid-column: 2;
      grid-row: 1 / span 2;

      width: calc(100% - 15rem);
      height: calc(100% - 15rem);

   }

   .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem 0;
   }

   .close-button {
      position: absolute;
      top: 3rem;
      right: 3rem;

      border-radius: 50px;
      width: 40px;
      height: 40px;

      color: var(--c-v0);
      background-color: var(--c-pm);

      display: grid;
      place-items: center;

      cursor: pointer;

      :hover {
         background-color: var(--c-pm-l);
      }

      :active {
         outline: var(--c-b) solid 3px;
      }
   }
`