import styled from 'styled-components';
import mixins from '@styles/mixins';
import { spacing, colors } from '@styles/variables';
import { min } from '@styles/responsive';

import Categories from '@components/Categories';
import Link from '@components/Link';

export default {
  Container: styled.section`
    ${mixins.flex({ align: 'center' })}

    h2 {
      margin: ${spacing.small};
    }
  `,

  ArrowCircle: styled(Link)`
    border-radius: 100%;
    border: 1px solid black;
    padding: ${spacing.gap};
    height: 100px;
    width: 100px;

    ${mixins.flex({ justify: 'center', align: 'center' })}

    transform: rotate(-45deg);

    transition: all 0.1s ease-in-out;

    :hover,
    :focus {
      background-color: ${colors.black};
      color: ${colors.white};
      transform: rotate(0);
    }
  `,

  Categories: styled(Categories)`
    ${mixins.flex({ direction: 'row', justify: 'center', wrap: 'wrap' })}

    @media ${min.tablet} {
      width: 70%;
    }
  `,
};
