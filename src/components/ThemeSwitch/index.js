import React, { useContext } from 'react';
import { classNames as cn } from 'peculiarity';

import { ThemeContext } from '../../contexts';
import styles from './styles.module.scss';

const ThemeSwitch = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);

  return (
    <button className={className} onClick={() => setIsDarkMode(!isDarkMode)}>
      <i className={cn(`${isDarkMode ? 'fas' : 'far'} fa-moon`, styles.themeSwitch)} />
    </button>
  );
};

export default ThemeSwitch;
