import React from 'react';

import { Project } from '../../containers';
import { RichText } from '../../components';

import styles from './styles.module.scss';

const Biography = ({ headline, biography, project }) => (
  <section>
    <div className={styles.copy}>
      <h2 className={styles.headline}>{headline}</h2>
      <div className={styles.richText}>
        <RichText content={biography} />
      </div>
      <img className={styles.aztec} src="assets/aztec/aztec-1.png" alt="Aztec graphic" />
    </div>
    <Project className={styles.project} project={project} />
  </section>
);

export default Biography;
