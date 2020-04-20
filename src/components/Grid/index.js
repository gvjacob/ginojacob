import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Grid = ({ className }) => {
  return <section className={cn(styles.grid, className)}></section>;
};

export default Grid;
