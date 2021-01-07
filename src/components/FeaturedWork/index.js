import React from 'react';

import Tease from '@components/Tease';

import styled from './styled';

const FeaturedWork = ({ className, featured }) => (
  <styled.Container className={className}>
    {featured.map((work, i) => (
      <Tease key={i} {...work} />
    ))}
  </styled.Container>
);

export default FeaturedWork;
