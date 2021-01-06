import styled from 'styled-components';

import Pill from '@components/Pill';
import { spacing } from '@styles/variables';
import mixins from '@styles/mixins';

export default {
  Group: styled.div`
    ${mixins.flex({ direction: 'row', wrap: 'wrap' })}
  `,
  Pill: styled(Pill)`
    margin-right: ${spacing.gap};
    margin-top: ${spacing.gap};
  `,
};
