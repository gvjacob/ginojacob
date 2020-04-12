import React, { useContext } from 'react';
import { classNames as cn } from 'peculiarity';

import { ThemeContext } from '../../contexts';
import styles from './styles.module.scss';

const ThemeSwitch = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);

  return (
    <div className={cn(styles.themeSwitch, className)}>
      <button className={styles.button} onClick={() => setIsDarkMode(!isDarkMode)}>
        <i className={cn(`${isDarkMode ? 'fas' : 'far'} fa-moon`)} />
      </button>
      <span className={styles.label}>Switch to {isDarkMode ? 'Light' : 'Dark'}</span>
    </div>
  );
};

export default ThemeSwitch;
