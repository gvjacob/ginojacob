import React from 'react';
import Markdown from 'react-markdown';

import css from './styles.module.scss';

const Hero = ({ headline, name, title, description, image }) => {
  return (
    <section className={css.hero}>
      <h1 className={css.headline}>{headline}</h1>
      <div className={css.info}>
        <div>
          <h2 className={css.name}>{name}</h2>
        </div>
        <div>
          <Markdown className={css.title} source={title} />
        </div>
      </div>
      <p className={css.description}>{description}</p>
      <img className={css.image} src={image.src} alt={image.alt} />
    </section>
  );
};

export default Hero;
