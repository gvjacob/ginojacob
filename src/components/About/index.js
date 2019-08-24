import React from 'react';
import styles from './styles.css';

import Block from '../Block';

const About = ({ className, title, subtitle, description, image }) => {
  return (
    <div className={className}>
      <img className={styles.profile} src={image} />
      <Block
        className={styles.bio}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
};

export default About;
