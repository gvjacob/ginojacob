import React from 'react';
import { If } from 'peculiarity/react';

import { Link } from '../../components';

import styles from './styles.module.scss';

const Archive = ({ projects }) => (
  <section className={styles.archive}>
    <h2 className={styles.headline}>Archive</h2>
    <ul className={styles.links}>
      {projects.map(({ name, caseStudy, liveSite, github }, i) => {
        const projectLink = caseStudy || liveSite || github;

        return (
          <If value={projectLink} key={i}>
            <li>
              <Link className={styles.link} to={projectLink}>
                {name}
              </Link>
            </li>
          </If>
        );
      })}
    </ul>
  </section>
);

export default Archive;
