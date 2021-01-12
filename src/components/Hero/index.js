import React from 'react';

import styled from './styled';

const Hero = ({ className, name, photo, date, position }) => (
  <styled.Hero className={className}>
    <styled.Logotype src="/assets/gno.svg" />
    <styled.PhotoContainer>
      <styled.PhotoDate className="ff-mono-body">{date}</styled.PhotoDate>
      <styled.Photo src={photo} />
      <styled.Name className="ff-mono-body">{name}</styled.Name>
    </styled.PhotoContainer>
    <styled.Position className="html">{position}</styled.Position>
  </styled.Hero>
);

export default Hero;
