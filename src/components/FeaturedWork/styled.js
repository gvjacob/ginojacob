import styled from 'styled-components';
import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Container: styled.section`
    ${mixins.flex({ gap: spacing.large })}

    @media ${min.tablet} {
      ${mixins.grid({ columns: '50% 40%' })}
      grid-template-rows: 1fr 1fr;
    }
  `,

  ProjectImage: styled.img`
    width: 100%;
    margin-bottom: ${spacing.small};
  `,
};
