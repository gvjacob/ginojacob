import styled from 'styled-components';
import { spacing, colors } from '@styles/variables';
import { max } from '@styles/responsive';

export default {
  Pill: component => styled(component)`
    padding: ${spacing.gap} ${spacing.small};
    border: 1px solid ${colors.black};
    border-radius: 50px;

    ${({ isFocusable }) =>
    isFocusable &&
      `
    transition: all 0.1s ease-in-out;

    :hover,
    :focus {
      background-color: ${colors.black};
      color: ${colors.white};
    }

    `}

    @media ${max.tablet} {
      padding: 5px ${spacing.gap};
      font-size: 12px;
      line-height: 18px;
    }
  `,
};
