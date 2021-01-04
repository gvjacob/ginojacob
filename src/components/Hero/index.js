import React from 'react';

import styled from './styled';

const Hero = ({ className }) => {
  return (
    <styled.Hero className={className}>
      <styled.Logotype src="/assets/gno.svg" />
      <styled.Position>Currently leading a project at Scout</styled.Position>
      <styled.PhotoContainer>
        <styled.PhotoDate className="ff-mono-body">02.16.2020</styled.PhotoDate>
        <styled.Photo src="/assets/profile.jpg" />
        <styled.Name className="ff-mono-body">Gino Jacob</styled.Name>
      </styled.PhotoContainer>
    </styled.Hero>
  );
};

export default Hero;
