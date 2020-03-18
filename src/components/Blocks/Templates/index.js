import React from 'react';
import { classNames as cn } from 'peculiarity';
import { Cell } from 'styled-css-grid';

import styles from './styles.module.scss';

const Block = (width, height) => ({ className, ...props }) => (
  <Cell className={cn(styles.cell, className)} width={width} height={height} {...props} />
);

export const Square = Block(1, 1);
export const Column = Block(1, 2);
