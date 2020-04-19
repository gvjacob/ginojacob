import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Highlight = ({ className, children }) => (
  <div className={cn(styles.highlight, className)}>{children}</div>
);

export default Highlight;
