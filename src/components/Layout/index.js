import React, { useState, useEffect } from 'react';

import { ThemeContext } from '../../contexts';
import styles from './styles.module.scss';
import { varBeige, varPink, varBlack, varWhite } from '../../styles/abstracts/_variables.scss';
import '../../styles/index.scss';

const getThemeConfiguration = isDarkMode =>
  isDarkMode
    ? {
        ['--primary']: varBeige,
        ['--secondary']: varWhite,
        ['--tertiary']: varBlack,
      }
    : {
        ['--primary']: varPink,
        ['--secondary']: varBlack,
        ['--tertiary']: varWhite,
      };

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const themeConfiguration = getThemeConfiguration(isDarkMode);

    Object.entries(themeConfiguration).forEach(([property, value]) =>
      document.documentElement.style.setProperty(property, value),
    );
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <main className={styles.layout}>{children}</main>
    </ThemeContext.Provider>
  );
};

export default Layout;
