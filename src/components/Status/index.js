import React from 'react';
import cn from 'classnames';

import styled from './styled';

const Status = ({ className, emoji, text, to }) => (
  <styled.Pill className={cn('ff-sans-serif-body-sub', className)} to={to}>
    <span>{emoji}</span> {text}
  </styled.Pill>
);

export default Status;
