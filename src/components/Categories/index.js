import React from 'react';

import Link from '@components/Link';
import Pill from '@components/Pill';
import styled from './styled';

const Categories = ({ className, categories }) => (
  <styled.Group className={className}>
    {categories.map(({ name, to }) => (
      <Pill to={to} key={name}>
        {name}
      </Pill>
    ))}
  </styled.Group>
);

export default Categories;
