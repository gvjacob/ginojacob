import React from 'react';
import styled from './styled';

const Topper = ({ className, title, description }) => (
  <styled.Container className={className}>
    <h1>{title}</h1>
    <p className="html" dangerouslySetInnerHTML={{ __html: description }} />
  </styled.Container>
);

export default Topper;
