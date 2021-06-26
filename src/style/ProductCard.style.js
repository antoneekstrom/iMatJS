import styled from 'styled-components'
import CardStyle from './Card.style'

const ProductCardBase = styled(CardStyle)`
   display: grid;

   position: relative;

   width: 190px;
   aspect-ratio: 1 / 1.618;

   padding: 0;
   padding-top: 1em;

   box-sizing: border-box;
   overflow: visible;
`

export default styled(ProductCardBase)`
   grid-template-rows: 5fr 2.5fr min-content;

   :hover {
      outline: var(--c-pm) solid 2px;
   }

   .card-image {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      place-self: center;
   }

   .card-content {
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
   }

   .card-add-button {
      margin: 1rem;
   }

   .card-title {
      :hover {
         text-decoration: underline;
      }
   }

   .card-title, .card-image {
      cursor: pointer;
   }
`
export const LoadingProductCardStyle = styled(ProductCardBase)`
   place-items: center;
   padding: 1rem;
   img {
      width: 100%;
      height: 100%;
   }
`