import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import About from '../About';
import styles from './styles.css';

const Base = () => {
  const tabs = [
    { title: 'Gino Jacob', body: <About /> },
    { title: 'Developer', body: <div /> },
    { title: 'Designer', body: <div /> },
    { title: 'Ballroom Dancer', body: <div /> },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.base}>
      <Navigation
        className={styles.navigation}
        tabs={tabs.map(({ title }) => title)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {tabs[currentIndex].body}
    </div>
  );
};

export default Base;
