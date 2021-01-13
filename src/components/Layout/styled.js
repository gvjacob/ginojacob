import styled from 'styled-components';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Container: styled.div`
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    ${({ preloaded }) => preloaded && `opacity: 1;`}
  `,
  Main: styled.main`
    padding: 0 ${spacing.gap};

    @media ${min.tablet} {
      padding: 0 ${spacing.smallMedium};
    }
  `,
};
