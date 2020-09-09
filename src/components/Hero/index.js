import React from 'react';
import Markdown from 'react-markdown';

import './styles.scss';

const Hero = ({ headline, name, title, description, image }) => {
  return (
    <section>
      <div className="hero-topper">
        <h1 className="hero-headline">{headline}</h1>
        <div className="hero-bio">
          <h2 className="hero-name">{name}</h2>
          <Markdown source={title} />
        </div>
      </div>
      <p>{description}</p>
      <img src={image.src} alt={image.alt} />
    </section>
  );
};

export default Hero;
