import styled from 'styled-components'

export default styled.div`
   background-color: white;
   border: none;
   outline: none;

   display: flex;
   flex-direction: row;
   align-items: center;

   border-radius: 25px;
   padding: 0.5rem 2rem;
   margin: 3px;
   box-sizing: border-box;

   font-family: "Nunito", sans-serif;
   font-size: 14px;
   font-weight: 700;
   
   :focus, :active, :focus-within {
      outline: var(--c-b) solid 3px;
   }

   :hover, &.pill-wrapper:hover input, :hover button {
   }

   &.pill-wrapper {
      padding: 0 1rem;
      overflow: hidden;

      input {
         outline: none;
         border: none;

         font-family: "Nunito", sans-serif;
         font-size: 14px;
         font-weight: 700;

         padding: 0.5rem;
      }
   }
`