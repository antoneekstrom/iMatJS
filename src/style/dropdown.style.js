import styled from 'styled-components'
import CardStyle from './Card.style'

export const DropdownStyle = styled(CardStyle)`
   position: absolute;
   width: 100%;
   margin-top: 2px;
   z-index: 5;

   box-shadow: rgba(0,0,0,0.2) 5px 5px 20px;
`

export const DropdownAnchorStyle = styled.div`
   position: relative;

   .dropdown {
      display: none;
   }

   &:focus-within .dropdown {
      display: block;
   }
`