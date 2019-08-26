import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import GinoJacob from '../GinoJacob';
import Developer from '../Developer';
import Designer from '../Designer';
import BallroomDancer from '../BallroomDancer';

import userIcon from '../../assets/images/user.svg';
import bulbIcon from '../../assets/images/bulb.svg';
import codeIcon from '../../assets/images/code.svg';
import danceIcon from '../../assets/images/dance.svg';
import styles from './styles.css';

const Base = () => {
  const tabs = [
    { title: 'Gino', body: GinoJacob, icon: userIcon },
    { title: 'Developer', body: Developer, icon: codeIcon },
    { title: 'Designer', body: Designer, icon: bulbIcon },
    { title: 'Ballroom Dancer', body: BallroomDancer, icon: danceIcon },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const $component = tabs[currentIndex].body;

  return (
    <div className={styles.base}>
      <Navigation
        className={styles.navigation}
        tabs={tabs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <$component className={styles.body} />
    </div>
  );
};

export default Base;
