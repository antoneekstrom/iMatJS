import styled, { css } from 'styled-components'

export type PriceStyleProps = {
   large?: any | undefined | null
}

export default styled.p<PriceStyleProps>`
   color: var(--c-g);
   font-family: "Nunito", sans-serif;
   font-weight: 700;
   font-size: 1.1rem;

   ${({ large }) => large && css`
      font-size: 2rem;
      font-weight: 900;
   `}
`