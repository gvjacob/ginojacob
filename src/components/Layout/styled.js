import styled from 'styled-components';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Main: styled.main`
    padding: 0 ${spacing.gap};

    @media ${min.tablet} {
      padding: 0 ${spacing.smallMedium};
    }
  `,
};
