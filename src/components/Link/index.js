import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Link = ({ children, to, className, ...props }) =>
  to ? (
    <a
      className={cn(styles.link, className)}
      href={to}
      {...props}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    children
  );

export default Link;
