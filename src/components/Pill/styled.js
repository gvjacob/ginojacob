import styled from 'styled-components';
import { spacing, colors } from '@styles/variables';

export default {
  Pill: (component) => styled(component)`
    padding: ${spacing.gap} ${spacing.small};
    border: 1px solid ${colors.black};
    border-radius: 50px;

    transition: all 0.1s ease-in-out;

    :hover,
    :focus {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  `,
};
