import styled from 'styled-components';

import mixins from '@styles/mixins';

export default {
  Profile: styled.div`
    ${mixins.flex('column-reverse')}
    width: 100%;
  `,

  Logotype: styled.img`
    width: 100%;
    padding: 0 20px;
    margin-bottom: -40px;
  `,

  Photo: styled.img`
    width: 100%;
  `,
};
