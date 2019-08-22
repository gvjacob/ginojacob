import React from 'react';
import styles from './styles.css';

import Block from '../../components/Block';
import { about } from '../../content';
import Gino from '../../assets/images/Gino-Jacob.jpg';

const About = ({ className }) => {
  const { title, subtitle, description } = about;

  return (
    <div className={className}>
      <img className={styles.profile} src={Gino} />
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
