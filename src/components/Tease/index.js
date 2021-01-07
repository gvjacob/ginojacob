import React from 'react';

import Link from '@components/Link';

import styled from './styled';

const Tease = ({ className, title, description, image, link }) => (
  <article className={className}>
    {image && <styled.Image src={image} />}
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </article>
);

export default Tease;
