import styled from 'styled-components';

import Pill from '@components/Pill';
import { spacing } from '@styles/variables';

export default {
  Pill: styled(Pill)`
    padding-left: ${spacing.gap};

    span {
      margin-right: 2px;
    }
  `,
};
