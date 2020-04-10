import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Link } from '../../components';
import styles from './styles.module.scss';

const Project = ({ className, project }) => {
  const { name, link } = project;

  return (
    <li className={className}>
      <Link to={link} newTab>
        <span className={cn(styles.projectName, link && styles.withLink)}>{name}</span>
      </Link>
    </li>
  );
};

const ProjectsArchive = ({ className, projects }) => (
  <section className={className}>
    <h2 className={styles.overline}>Archive</h2>
    <ul>
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </ul>
  </section>
);

export default ProjectsArchive;
