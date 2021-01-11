import styled from "styled-components";

import mixins from "@styles/mixins";
import { spacing } from "@styles/variables";

export default {
  Footer: styled.footer`
    ${mixins.grid({
      columns: "repeat(3, 1fr)",
      gap: `${spacing.medium} ${spacing.gap}`,
    })}

    padding: ${spacing.medium} ${spacing.smallMedium};
    padding-bottom: ${spacing.small};
  `,

  Logotype: styled.img`
    width: 50%;
  `,

  Location: styled.p`
    grid-column-end: span 2;
  `,
};
