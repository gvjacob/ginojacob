import React from 'react';

import Link from '@components/Link';

import styled from './styled';

const Tease = ({
  className,
  title,
  description,
  cover,
  link,
  case_study_link,
  live_link,
}) => (
  <styled.Tease className={className}>
    {cover && <styled.Image src={cover} />}
    <h3>
      <Link to={case_study_link || live_link || link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </styled.Tease>
);

export default Tease;
