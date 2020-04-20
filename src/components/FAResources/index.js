import React from 'react';
import { classNames as cn } from 'peculiarity';

import { FALink } from '..';

import styles from './styles.module.scss';

const FAResources = ({ className, resources }) => (
  <ul className={cn(styles.faResources, className)}>
    {resources.map((resource, i) => (
      <li className={styles.resource} key={i}>
        <FALink {...resource} />
      </li>
    ))}
  </ul>
);

export default FAResources;
