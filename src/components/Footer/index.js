import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Link } from '..';

import styles from './styles.module.scss';

const Footer = ({ className, resources }) => (
  <footer className={cn(styles.footer, className)}>
    <ul>
      {resources.map(({ name, link }, i) => (
        <li className={styles.resource} key={i}>
          <Link to={link}>{name}</Link>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
