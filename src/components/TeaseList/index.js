import React from 'react';

import Tease from '@components/Tease';

import styled from './styled';

const TeaseList = ({ className, projects }) => (
  <styled.List className={className}>
    {projects.map((project, i) => (
      <li key={i}>
        <article>
          <Tease {...project} />
        </article>
      </li>
    ))}
  </styled.List>
);

export default TeaseList;
