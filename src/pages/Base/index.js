import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import styles from './styles.css';

const Base = () => {
  const tabs = ['Gino Jacob', 'Developer', 'Designer', 'Ballroom Dancer'];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.base}>
      <Navigation
        tabs={tabs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Base;
