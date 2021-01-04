import React from 'react';
import cn from 'classnames';

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

const ArchiveTease = ({ className }) => (
  <styled.Container className={className}>
    <Arrow to="#" />
    <h2>Archive</h2>
  </styled.Container>
);

export default ArchiveTease;
