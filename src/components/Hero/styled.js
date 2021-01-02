import styled from "styled-components";

import mixins from "@styles/mixins";

export default {
  Hero: styled.div`
    ${mixins.grid({ columns: "repeat(12, 1fr)", gap: "10px" })}

    width: 100%;
  `,

  center: (component) => styled(component)`
    grid-column: 5 / 9;
  `,
};
