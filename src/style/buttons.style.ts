import styled, { css } from 'styled-components';
import PillStyle from './Pill.style';

export type ButtonStyleProps = {
   variant?: 'primary' | 'normal' | 'secondary';
};

export type CartButtonStyleProps = {
   itemCount?: number;
};

export const ButtonStyle = styled(PillStyle)<ButtonStyleProps>`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 0.5em;

   color: var(--c-pm);
   cursor: pointer;

   ${({ variant }) => chooseVariant(variant)};
`;

export const CartButtonStyle = styled(ButtonStyle)<CartButtonStyleProps>`
   ${chooseVariant('secondary')};

   overflow: unset;
   position: relative;

   ::after {
      ${({ itemCount }) =>
         itemCount
            ? css`
                 content: '${itemCount}';
              `
            : css`
                 display: none;
              `}
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(35%, -30%);

      color: var(--c-g);
      background-color: var(--c-v0);
      border: solid 3px var(--c-v1);

      font-size: 0.8rem;
      text-align: center;
      vertical-align: middle;
      line-height: 1.1rem;  

      border-radius: 100px;
      width: 1.5rem;
      height: 1rem;
      padding: 0.2rem;
      margin: 0;
   }
`;

function chooseVariant(variant?: ButtonStyleProps['variant']) {
   switch (variant) {
      default:
      case 'normal':
         return css`
            background-color: var(--c-v0);
            color: var(--c-pm);

            :hover {
               background-color: var(--c-v2);
            }
         `;

      case 'primary':
         return css`
            color: var(--c-v0);
            background-color: var(--c-pm);

            :hover {
               background-color: var(--c-pm-l);
            }
         `;

      case 'secondary':
         return css`
            color: var(--c-v0);
            background-color: var(--c-g);

            :hover {
               background-color: var(--c-g-l);
            }
         `;
   }
}
