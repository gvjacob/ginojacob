import React from 'react';
import { classNames as cn } from 'peculiarity';

import FAIcon from '../FAIcon';
import Link from '../Link';
import styles from './styles.module.scss';

const FALink = ({ className, name, link, fontAwesomeClass }) => (
  <Link className={cn(styles.faLink, className)} to={link} newTab>
    <FAIcon className={styles.icon} fontAwesomeClass={fontAwesomeClass} />
    {name && <span className={styles.name}>{name}</span>}
  </Link>
);

export default FALink;
