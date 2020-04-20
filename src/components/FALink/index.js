import React from 'react';
import { classNames as cn } from 'peculiarity';

import FAIcon from '../FAIcon';
import Link from '../Link';
import styles from './styles.module.scss';

const FALink = ({ className, link, fontAwesomeClass }) => (
  <Link className={cn(styles.faLink, className)} to={link}>
    <FAIcon className={styles.icon} fontAwesomeClass={fontAwesomeClass} />
  </Link>
);

export default FALink;
