import styled from 'styled-components';

import Topper from '@components/Topper';
import Categories from '@components/Categories';
import TeaseList from '@components/TeaseList';

import { spacing } from '@styles/variables';

export default {
  Topper: styled(Topper)`
    width: 50%;
    margin-bottom: ${spacing.small};
    margin-top: ${spacing.medium};
  `,

  Categories: styled(Categories)`
    width: 66%;
    margin-bottom: ${spacing.medium};
  `,

  TeaseList: styled(TeaseList)`
    width: 50%;
    margin-top: ${spacing.medium};
    margin-bottom: ${spacing.large};
  `,
};
