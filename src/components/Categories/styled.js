import styled from 'styled-components';
import { spacing } from '@styles/variables';
import mixins from '@styles/mixins';

export default {
  Group: styled.nav`
    ${mixins.flex({ direction: 'row', justify: 'center', wrap: 'wrap' })}
    width: 70%;

    a {
      margin-right: ${spacing.gap};
      margin-top: ${spacing.gap};
    }
  `,
};
