import styled from "styled-components";

import mixins from "@styles/mixins";
import { spacing } from "@styles/variables";

export default {
  Biography: styled.section`
    ${mixins.grid({
      columns: "repeat(3, 1fr)",
      gap: `${spacing.smallMedium} ${spacing.gap}`,
    })}
  `,

  About: styled.p`
    grid-column: 2 / 4;
  `,

  Status: styled.p`
    grid-column: 2 / 4;
  `,

  Location: styled.p`
    grid-column: 1;
    grid-row: 2;
    height: fit-content;
    align-self: flex-end;
    margin-bottom: 5px;
  `,
};
