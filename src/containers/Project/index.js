import React, { useRef, useEffect } from 'react';
import { classNames as cn } from 'peculiarity';
import { If } from 'peculiarity/react';

import gsap from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import * as ScrollMagic from 'scrollmagic';

import { Image, Link } from '../../components';
import styles from './styles.module.scss';

const Project = ({ className, project }) => {
  const { name, description, media, liveSite, github, caseStudy, links } = project;
  const imageRef = useRef();

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

  useEffect(() => {
    ScrollMagicPluginGsap(ScrollMagic, gsap);

    const controller = new ScrollMagic.Controller();
    const tween = gsap.from(imageRef.current, { opacity: 0, y: 20, duration: 0.4 });

    new ScrollMagic.Scene({
      triggerElement: imageRef.current,
      triggerHook: 'onCenter',
      offset: 10,
      reverse: false,
    })
      .setTween(tween)
      .addTo(controller);
  }, []);

  return (
    <figure className={cn(styles.project, className)}>
      <Image className={styles.image} image={media} ref={imageRef} />

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
