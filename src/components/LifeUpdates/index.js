import React from 'react';

import styled from './styled';

const Update = ({ className, date, text }) => (
  <styled.Update className={className}>
    <span className="ff-mono-body">{date}</span>
    <p>{text}</p>
  </styled.Update>
);

const LifeUpdates = ({ className, updates }) => (
  <styled.Container className={className}>
    {updates.map((update, i) => (
      <Update {...update} key={i} />
    ))}
  </styled.Container>
);

export default LifeUpdates;
