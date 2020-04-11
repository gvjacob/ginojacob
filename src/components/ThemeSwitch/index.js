import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const ThemeSwitch = ({ className }) => {
  return <i className={cn('far fa-moon', styles.themeSwitch, className)} />;
};

export default ThemeSwitch;
