import styled from 'styled-components';
import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';
import { min } from '@styles/responsive';

export default {
  Container: styled.section`
    ${mixins.flex({ gap: spacing.large })}

    @media ${min.tablet} {
      ${mixins.grid({ columns: '50% 40%', gap: '10%' })}
    }
  `,

  ProjectImage: styled.img`
    width: 100%;
    margin-bottom: ${spacing.small};
  `,
};
