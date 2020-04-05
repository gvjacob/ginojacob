import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const FALink = ({ className, name, link, fontAwesomeClass }) => (
  <a
    className={cn(styles.faLink, className)}
    href={link}
    target={'_blank'}
    rel="noopener noreferrer">
    <i className={cn(styles.icon, fontAwesomeClass)} />
    <span className={styles.name}>{name}</span>
  </a>
);

export default FALink;
