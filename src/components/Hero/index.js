import React from 'react';
import styles from './styles.module.scss';

const Hero = ({ headline, name, title, description }) => {
  return (
    <section>
      <h1>{headline}</h1>
      <div>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <p>{description}</p>
    </section>
  );
};

export default Hero;
