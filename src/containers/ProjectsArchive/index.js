import React, { useEffect, useRef } from 'react';
import { classNames as cn } from 'peculiarity';
import { TweenLite } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import { Link } from '../../components';
import styles from './styles.module.scss';

ScrollMagicPluginGsap(ScrollMagic, TweenLite);

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

const ProjectsArchive = ({ className, projects }) => {
  const ref = useRef();

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const tween = TweenLite.fromTo(`.project`, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.2 });

    new ScrollMagic.Scene({
      triggerElement: ref.current,
      triggerHook: 'onEnter',
      offset: 100,
    })
      .setTween(tween)
      .addTo(controller);
  }, []);

  return (
    <section className={className} ref={ref}>
      <h2 className={styles.overline}>Archive</h2>
      <ul>
        {projects.map((project, i) => (
          <Project className={'project'} project={project} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsArchive;
