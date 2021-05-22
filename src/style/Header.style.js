import { Link } from 'raviger'
import styled from 'styled-components'

export default styled.header`
   background-color: var(--c-pm);

   &, & nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      //justify-content: space-between;
   }

   padding: 0 2rem;
   gap: 5rem;

   nav {
      gap: 3rem;
      height: 100%;

   }

   nav.far {
      margin-left: auto;
   }
`

export const HeaderLink = styled(Link)`
   color: var(--c-v0);
   font-family: 'Nunito', sans-serif;
   font-size: 16px;
   font-weight: 700;

   cursor: pointer;
   height: 100%;
`