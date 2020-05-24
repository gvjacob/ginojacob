import React from 'react';

import { RichText } from '../../components';
import styles from './styles.module.scss';

const Biography = ({ headline, biography }) => (
  <section className={styles.biography}>
    <h2 className={styles.headline}>{headline}</h2>
    <div className={styles.richText}>
      <RichText content={biography} />
    </div>
  </section>
);

export default Biography;
