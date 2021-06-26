import styled from 'styled-components'

export default styled.span`
   color: var(--c-pm);
   background-color: var(--c-v2);
   padding: 0.1rem 0.7em;
   border-radius: 5px;
   cursor: pointer;
   margin: 0.3rem 0;
   font-size: 0.85rem;
   font-family: "Nunito", sans-serif;

   :hover {
      /* color: var(--c-v2);
      background-color: var(--c-pm-l); */
      text-decoration: underline;
   }
`

export const ProductTagsStyle = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 0.5rem;
   margin: 0.3rem 0;
`