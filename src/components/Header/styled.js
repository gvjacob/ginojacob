import styled from 'styled-components';

import mixins from '@styles/mixins';
import { spacing } from '@styles/variables';

export default {
  Header: styled.header`
    padding: ${spacing.smallMedium};
  `,
  HeaderLinks: styled.ul`
    ${mixins.flex({ direction: 'row' })}

    li {
      margin-right: ${spacing.medium};
    }
  `,
};
