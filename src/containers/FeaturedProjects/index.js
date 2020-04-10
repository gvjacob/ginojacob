import React, { useEffect, useRef } from 'react';
import { classNames as cn } from 'peculiarity';
import { TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import { Image, Link } from '../../components';
import styles from './styles.module.scss';

ScrollMagicPluginGsap(ScrollMagic, TimelineLite);

const Project = ({ className, project }) => {
  const imageRef = useRef();
  const copyRef = useRef();

  const { name, description, link, media } = project;

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const timeline = new TimelineLite();

    timeline.to(imageRef.current, { padding: 400, opacity: 0.2 });
    timeline.fromTo(copyRef.current, { autoAlpha: 0 }, { autoAlpha: 1 });

    new ScrollMagic.Scene({
      triggerElement: imageRef.current,
      triggerHook: 'onLeave',
      offset: 100,
      duration: 200,
    })
      .setTween(timeline)
      .addTo(controller);
  }, []);

  return (
    <section className={cn(styles.project, className)}>
      <Image className={styles.image} image={media} ref={imageRef} />
      <div className={styles.copy} ref={copyRef}>
        <span className={styles.overline}>Featured Project</span>
        <Link to={link} newTab>
          <h2 className={cn(styles.projectName, link && styles.withLink)}>{name}</h2>
        </Link>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </section>
  );
};

const FeaturedProjects = ({ className, projects }) => (
  <section className={className}>
    <Project project={projects[0]} />
  </section>
);

export default FeaturedProjects;
