import React from 'react';

import Link from '@components/Link';
import styled from './styled';

const Announcement = ({ className }) => (
  <styled.Container className={className}>
      Hi! My name is Gino. This website is under (heavy) construction, and I
      have big plans for it! What you're seeing is a work in progress but I'm
      actively working on it everyday. Please check it out again maybe in a week
      or two :). Meanwhile, you can head over to my{' '}
    <Link to="https://www.linkedin.com/in/gvjacob/">LinkedIn</Link> or shoot
      me an email at gvjacob@outlook.com if you want to get to know me!
  </styled.Container>
);

export default Announcement;
