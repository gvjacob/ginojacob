import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import About from '../About';
import Developer from '../Developer';
import Designer from '../Designer';
import BallroomDancer from '../BallroomDancer';

import { about } from '../../content';

import styles from './styles.css';

const Base = () => {
  const tabs = [
    { title: 'Gino Jacob', body: About },
    { title: 'Developer', body: Developer },
    { title: 'Designer', body: Designer },
    { title: 'Ballroom Dancer', body: BallroomDancer },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const $component = tabs[currentIndex].body;

  return (
    <div className={styles.base}>
      <Navigation
        className={styles.navigation}
        tabs={tabs.map(({ title }) => title)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <$component className={styles.body} />
    </div>
  );
};

export default Base;
