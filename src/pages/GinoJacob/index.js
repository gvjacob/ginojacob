import React from 'react';

import About from '../../components/About';
import { ginoJacob } from '../../content';

const GinoJacob = ({ className }) => {
  const { title, subtitle, description, image } = ginoJacob;

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

export default GinoJacob;
