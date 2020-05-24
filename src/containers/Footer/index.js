import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Link, Image } from '../../components';
import styles from './styles.module.scss';

const Links = ({ links }) =>
  links.map(({ name, url }, i) => (
    <Link key={i} className={styles.link} to={url}>
      {name}
    </Link>
  ));

const Footer = ({ className, footerHeadline, contactLinks, portfolioLinks, avatar }) => (
  <footer className={cn(styles.footer, className)}>
    <h2 className={styles.headline}>{footerHeadline}</h2>
    <div className={styles.links}>
      <Links links={contactLinks} />
      <Image className={styles.avatar} image={avatar} />
      <Links links={portfolioLinks} />
    </div>
  </footer>
);

export default Footer;
