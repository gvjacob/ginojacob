import React from 'react';
import { classNames as cn } from 'peculiarity';
import { If } from 'peculiarity/dist/react';

import { Image, Link } from '../../components';
import styles from './styles.module.scss';

const Project = ({ className, project }) => {
  const { name, description, media, liveSite, github, caseStudy, links } = project;

  const projectLinks = [
    {
      name: 'Live Site',
      url: liveSite,
    },
    {
      name: 'GitHub',
      url: github,
    },
    ...links,
    {
      name: 'Read More',
      url: caseStudy,
    },
  ];

  return (
    <figure className={cn(styles.project, className)}>
      <Image className={styles.image} image={media} />

      <div className={styles.copy}>
        <span className={styles.label}>Featured Work</span>

        <figcaption className={styles.caption}>
          <h3>{name}</h3>
          {description && <p>{description}</p>}
        </figcaption>

        <ul className={styles.links}>
          {projectLinks.map(({ name, url }, i) => (
            <If value={url} key={i}>
              <li>
                <Link to={url}>{name}</Link>
              </li>
            </If>
          ))}
        </ul>
      </div>
    </figure>
  );
};

export default Project;
