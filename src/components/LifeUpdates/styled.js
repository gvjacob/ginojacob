import styled from 'styled-components';
import mixins from '@styles/mixins';
import { colors, spacing } from '@styles/variables';

export default {
  Container: styled.section`
    ${mixins.flex({ direction: 'row' })}
    border: 1px solid ${colors.lightgray};
    padding: ${spacing.smallMedium};
    overflow-x: scroll;
  `,
  Update: styled.div`
    padding-right: ${spacing.small};
    padding-bottom: ${spacing.small};
    width: calc(100% / 3);
    flex-shrink: 0;

    span {
      color: ${colors.stonegray};
    }

    div {
      margin-top: ${spacing.gap};
    }
  `,
};
