import React from 'react';
import day from 'dayjs';

import styled from './styled';

const Update = ({ className, date, html }) => {
  const formattedDate = day(date).format('MMM D, YYYY');

  return (
    <styled.Update className={className}>
      <span className="ff-mono-body">{formattedDate}</span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </styled.Update>
  );
};

const LifeUpdates = ({ className, updates }) => (
  <styled.Container className={className}>
    {updates.map((update, i) => (
      <Update {...update} key={i} />
    ))}
  </styled.Container>
);

export default LifeUpdates;
