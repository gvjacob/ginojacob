import React from 'react';

import styled from './styled';

const Categories = ({ className, categories }) => (
  <styled.Group className={className}>
    {categories.map(({ name, to, onClick }) => (
      <styled.Pill to={to} onClick={onClick} key={name}>
        {name}
      </styled.Pill>
    ))}
  </styled.Group>
);

export default Categories;
