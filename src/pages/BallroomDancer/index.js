import React from 'react';
import styles from './styles.css';

import Block from '../../components/Block';
import { ballroomDancer } from '../../content';
import smooth from '../../assets/images/smooth.jpg';

const BallroomDancer = ({ className }) => {
  const { title, subtitle, description } = ballroomDancer;

  return (
    <div className={className}>
      <img className={styles.smooth} src={smooth} />
      <Block
        className={styles.bio}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
};

export default BallroomDancer;
