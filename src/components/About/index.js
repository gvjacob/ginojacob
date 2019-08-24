import React from 'react';
import styles from './styles.css';

import Block from '../Block';

const About = ({ className, title, subtitle, description, image, tags }) => {
  return (
    <div className={className}>
      <img className={styles.profile} src={image} />
      <Block
        className={styles.bio}
        title={title}
        subtitle={subtitle}
        description={description}
        tags={tags}
      />
    </div>
  );
};

export default About;
