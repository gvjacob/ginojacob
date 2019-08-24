import React from 'react';

import About from '../../components/About';
import { ginoJacob } from '../../content';
import styles from './styles.css';

const GinoJacob = ({ className }) => {
  const { title, subtitle, description, image } = ginoJacob;
  const links = [
    {
      title: 'Email',
      link: 'mailto:gvjacob@outlook.com',
      target: '_top',
    },
    {
      title: 'Résumé',
      link: 'https://indd.adobe.com/view/3d1c1fa1-6a12-4d15-b3d9-c0059cc1202b',
      target: '_blank',
    },
    {
      title: 'Github',
      link: 'https://github.com/gvjacob',
      target: '_blank',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gvjacob',
      target: '_blank',
    },
  ];

  const taggedLinks = links.map(({ title, link, target }) => (
    <a className={styles.link} href={link} target={target}>
      <b>{title}</b>
    </a>
  ));

  return (
    <About
      className={className}
      title={title}
      subtitle={subtitle}
      description={description}
      image={image}
      tags={taggedLinks}
    />
  );
};

export default GinoJacob;
