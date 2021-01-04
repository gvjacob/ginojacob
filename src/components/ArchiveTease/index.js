import React from 'react';
import cn from 'classnames';

import Categories from '@components/Categories';
import styled from './styled';

const Arrow = ({ className, to }) => (
  <styled.ArrowCircle
    className={cn('ff-sans-serif-title', className)}
    to={to}
    basic
  >
    &rarr;
  </styled.ArrowCircle>
);

const ArchiveTease = ({ className, categories }) => (
  <styled.Container className={className}>
    <Arrow to="#" />
    <h2>Archive</h2>
    <Categories categories={categories} />
  </styled.Container>
);

export default ArchiveTease;
