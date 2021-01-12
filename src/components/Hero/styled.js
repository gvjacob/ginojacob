import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min, max } from '@styles/responsive';

export default {
  Hero: styled.section`
    width: 100%;

    ${mixins.flex({})}

    @media ${min.tablet} {
      ${mixins.grid({
    columns: 'repeat(12, 1fr)',
    rows: '2fr',
    gap: spacing.gap,
  })}
    }
  `,

  Position: styled.p`
    grid-column: 1 / 4;
    grid-row: 2;

    @media ${max.tablet} {
      width: 70%;
      text-align: center;
      margin: auto;
      margin-top: ${spacing.small};
    }
  `,

  Logotype: styled.img`
    width: 100%;
    padding: 0 20px;
    margin-bottom: -50px;
    z-index: 1;

    grid-column: 5 / 9;

    @media ${max.tablet} {
      width: 80%;
      margin: auto;
      margin-bottom: -30px;
    }
  `,

  PhotoContainer: styled.div`
    position: relative;
    grid-column: 5 / 9;

    @media ${max.tablet} {
      margin: auto;
      width: calc(100% - 70px);
    }
  `,

  Photo: styled.img`
    width: 100%;
  `,

  PhotoDate: styled.span`
    ${mixins.absolute({ left: '-30px' })};
    writing-mode: vertical-rl;
  `,

  Name: styled.span`
    ${mixins.absolute({ right: '-30px' })};
    writing-mode: vertical-rl;
  `,
};
