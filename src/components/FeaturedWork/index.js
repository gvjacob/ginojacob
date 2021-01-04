import React from 'react';

import Link from '@components/Link';

import styled from './styled';

const Tease = ({ className, title, description, image, link }) => (
  <article className={className}>
    <styled.ProjectImage src={image} />
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </article>
);

const FeaturedWork = ({ className, featured }) => (
  <styled.Container className={className}>
    {featured.map((work, i) => (
      <Tease key={i} {...work} />
    ))}
  </styled.Container>
);

export default FeaturedWork;
