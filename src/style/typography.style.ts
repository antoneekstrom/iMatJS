import styled, { css } from 'styled-components';

export type TypographyProps = {
   color?: 'normal' | 'primary' | 'secondary';
};

export const Header1 = styled.h1<TypographyProps>`
   font-size: 56px;
   font-family: 'Nunito', sans-serif;
   font-weight: 900;
   ${({ color }) => chooseColor(color, 'var(--c-pm)')}
`;

export const Header2 = styled.h2<TypographyProps>`
   font-size: 26px;
   font-family: 'Nunito', sans-serif;
   font-weight: 900;
   ${({ color }) => chooseColor(color, 'var(--c-pm)')}
`;

export const Header3 = styled.h3<TypographyProps>`
   font-size: 16px;
   font-family: 'Nunito', sans-serif;
   font-weight: 700;
   line-height: 100%;
   ${({ color }) => chooseColor(color, 'var(--c-pm)')}
`;

export const Header4 = styled.h4<TypographyProps>`
   font-size: 14px;
   font-family: 'Nunito', sans-serif;
   font-weight: 700;
   ${({ color }) => chooseColor(color, 'black')}
`;

export const Paragraph = styled.p<TypographyProps>`
   font-size: 14px;
   font-family: 'Nunito', sans-serif;
   line-height: 165%;
   ${({ color }) => chooseColor(color, 'black')}
`;

function chooseColor(color?: TypographyProps['color'], defaultColor?: string) {
   switch (color) {
      default:
         return css`
            color: ${defaultColor};
         `;
      case 'normal':
         return css`
            color: black;
         `;
      case 'primary':
         return css`
            color: var(--c-pm);
         `;
      case 'secondary':
         return css`
            color: var(--c-g);
         `;
   }
}
