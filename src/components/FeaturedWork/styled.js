import styled from 'styled-components';
import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min, max } from '@styles/responsive';

export default {
  Container: styled.section`
    grid-template-rows: 1fr 1fr;

    @media ${max.tablet} {
      article {
        margin-bottom: ${spacing.large};
      }
    }

    @media ${min.tablet} {
      ${mixins.grid({ columns: '50% 40%', gap: '10%' })}
      grid-template-rows: 1fr 1.5fr;
    }
  `,

  ProjectImage: styled.img`
    width: 100%;
    margin-bottom: ${spacing.small};
  `,
};
