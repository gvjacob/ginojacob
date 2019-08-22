import React from 'react';
import styles from './styles.css';

import Gino from '../../assets/images/Gino-Jacob.jpg';

const About = (props) => {
  return (
    <div>
      <img className={styles.profile} src={Gino} />
      <div className={styles.bio}>
        <h1>Gino V Jacob</h1>
        <div className={styles.paragraph}>
          I’ve mocked up website designs, prototyped VR games, and learned to be
          an avid functional programmer beyond my professional web development
          career. I’m a self-taught developer and above all else, an
          unapologetically customer-centric designer.
        </div>
        <div className={styles.paragraph}>
          You'd find me ballroom dancing when I'm not solving people's problems.
        </div>
      </div>
    </div>
  );
};

export default About;
