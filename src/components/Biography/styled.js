import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min, max } from '@styles/responsive';

export default {
  Biography: styled.section`
    @media ${max.tablet} {
      font-size: 24px;
      line-height: 32px;
    }

    @media ${min.tablet} {
      ${mixins.grid({
    columns: 'repeat(3, 1fr)',
    gap: `${spacing.smallMedium} ${spacing.gap}`,
  })}
    }
  `,

  About: styled.p`
    grid-column: 2 / 4;
  `,

  Status: styled.p`
    grid-column: 2 / 4;
  `,

  Location: styled.p`
    grid-column: 1;
    grid-row: 2;
    height: fit-content;
    align-self: flex-end;
    margin-bottom: 5px;
  `,
};
