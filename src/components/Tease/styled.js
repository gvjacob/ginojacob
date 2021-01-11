import styled from 'styled-components';
import { spacing } from '@styles/variables';

export default {
  Tease: styled.article`
    h3 {
      margin-bottom: ${spacing.gap};
    }
  `,
  Image: styled.img`
    width: 100%;
    margin-bottom: ${spacing.small};
  `,
};
