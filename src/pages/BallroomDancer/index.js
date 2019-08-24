import React from 'react';

import About from '../../components/About';
import { ballroomDancer } from '../../content';

const BallroomDancer = ({ className }) => {
  const { title, subtitle, description, image } = ballroomDancer;

  return (
    <About
      className={className}
      title={title}
      subtitle={subtitle}
      description={description}
      image={image}
    />
  );
};

export default BallroomDancer;
