import React from 'react';
import Markdown from 'react-markdown';

import './styles.scss';

const Hero = ({ headline, name, title, description, image }) => {
  return (
    <section>
      <div className="hero__topper">
        <div className="hero__headline"></div>
        <div className="hero__bio">
          <div>
            <h2 className="hero__name">{name}</h2>
          </div>
          <div>
            <Markdown className="hero__title" source={title} />
          </div>
          <div>
            <h1 className="hero__headline-text">{headline}</h1>
          </div>
        </div>
      </div>
      <p>{description}</p>
      <img src={image.src} alt={image.alt} />
    </section>
  );
};

export default Hero;
