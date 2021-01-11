import styled from "styled-components";
import mixins from "@styles/mixins";
import { colors, spacing } from "@styles/variables";
import { min } from "@styles/responsive";

export default {
  Container: styled.section`
    ${mixins.flex({ direction: "row" })}
    border-top: 1px solid ${colors.lightgray};
    border-bottom: 1px solid ${colors.lightgray};

    overflow-x: scroll;
    padding: ${spacing.gap} 0;

    @media ${min.tablet} {
      padding: ${spacing.smallMedium};
    }
  `,
  Update: styled.div`
    padding: ${spacing.gap};
    width: 100%;
    flex-shrink: 0;

    span {
      color: ${colors.stonegray};
    }

    div {
      margin-top: ${spacing.gap};
    }

    @media ${min.tablet} {
      padding-right: ${spacing.small};
      padding-bottom: ${spacing.small};
      width: calc(100% / 3);
    }
  `,
};
