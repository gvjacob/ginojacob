import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Footer: styled.footer`
    padding: ${spacing.smallMedium} ${spacing.gap};
    padding-bottom: ${spacing.small};

    @media ${min.tablet} {
      ${mixins.flex({})}

      padding: ${spacing.medium} ${spacing.smallMedium};
      padding-bottom: ${spacing.small};
    }
  `,

  LinksContainer: styled.div`
    ${mixins.flex({ direction: 'column-reverse', gap: spacing.small })}

    @media ${min.tablet} {
      ${mixins.grid({
    columns: 'repeat(3, 1fr)',
    gap: `${spacing.medium} ${spacing.gap}`,
  })}
    }
  `,

  Logotype: styled.img`
    width: 100%;
    margin-top: ${spacing.small};

    @media ${min.tablet} {
      width: 50%;
      margin-top: 0;
    }
  `,

  CopyrightContainer: styled.div`
    margin-top: ${spacing.small};

    @media ${min.tablet} {
      margin-top: ${spacing.medium};

      ${mixins.grid({
    columns: 'repeat(3, 1fr)',
    gap: `${spacing.medium} ${spacing.gap}`,
  })}
    }
  `,

  Location: styled.p`
    grid-column-end: span 2;
  `,
};
