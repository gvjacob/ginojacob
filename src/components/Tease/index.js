import React from 'react';

import Link from '@components/Link';

import styled from './styled';

const Tease = ({ className, title, description, cover, link }) => (
  <article className={className}>
    {cover && <styled.Image src={cover} />}
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </article>
);

export default Tease;
