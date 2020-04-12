import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const FAIcon = ({ className, link, fontAwesomeClass }) => (
  <i className={cn(styles.icon, fontAwesomeClass, className)} />
);

export default FAIcon;
