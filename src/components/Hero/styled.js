import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';

export default {
  Hero: styled.section`
    ${mixins.grid({ columns: 'repeat(12, 1fr)', gap: spacing.gap })}

    grid-template-rows: 2fr;
    width: 100%;
  `,

  Position: styled.p`
    grid-column: 1 / 4;
  `,

  Logotype: styled.img`
    width: 100%;
    padding: 0 20px;
    margin-bottom: -50px;
    z-index: 1;

    grid-column: 5 / 9;
  `,

  PhotoContainer: styled.div`
    position: relative;
    grid-column: 5 / 9;
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
