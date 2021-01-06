import styled from 'styled-components';

import Topper from '@components/Topper';
import Categories from '@components/Categories';

import { spacing } from '@styles/variables';

export default {
  Topper: styled(Topper)`
    width: 50%;
    margin-bottom: ${spacing.small};
  `,
  Categories: styled(Categories)`
    width: 66%;
  `,
};
