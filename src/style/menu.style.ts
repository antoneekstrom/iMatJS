import styled, { css } from 'styled-components';

export type MenuItemStyleProps = {
   variant?: 'primary' | 'normal';
   active?: boolean;
};

export const MenuItemStyle = styled.div<MenuItemStyleProps>`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 0.5em;

   padding: 0.5rem 2rem;
   border-radius: 10px;

   border: none;
   background-color: var(--c-v0);

   cursor: pointer;

   &:hover {
      background-color: var(--c-v3);
   }

   &:active {
      outline: var(--c-b) solid 3px;
   }

   .product-tags {
      margin-left: 1rem;
   }

   ${({ variant }) => {
      switch (variant) {
         default:
            break;
         case 'primary':
            return css`
               color: var(--c-pm);
               background-color: var(--c-v2);

               :hover {
                  color: var(--c-v2);
                  background-color: var(--c-pm-l);
               }
            `;
      }
   }}

   ${({ variant, active }) => {
      switch (variant) {
         default:
         case 'primary':
            return (
               active &&
               css`
                  &, :hover {
                     color: var(--c-v2);
                     background-color: var(--c-pm);
                     cursor: unset;
                  }
               `
            );
      }
   }}
`;

export const MenuItemText = styled.span`
   font-family: 'Nunito';
   font-weight: 700;
`;

export const MenuListStyle = styled.ol`
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
`;
