import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Header: styled.header`
    padding: ${spacing.gap};
    height: 100px;
    padding-top: ${spacing.small};

    @media ${min.tablet} {
      padding: ${spacing.smallMedium};

      ${mixins.flex({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
  })}
    }
  `,
  HeaderLinks: styled.ul`
    ${mixins.flex({ direction: 'row' })}

    li {
      margin-right: ${spacing.small};

      @media ${min.tablet} {
        margin-right: ${spacing.medium};
      }
    }
  `,
};
