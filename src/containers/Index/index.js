import React from 'react';

import { SEO, Column } from '../../components';
import Introduction from '../Introduction';
import styles from './styles.module.scss';

const Index = () => (
  <div className={styles.index}>
    <SEO title="Developer, Designer, Ballroom Dancer" />
    <Introduction />
    <Column className={styles.column} />
  </div>
);

export default Index;
