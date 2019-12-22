import React from 'react';
import cn from 'classnames';

import css from './styles.css';

/**
 * Footer component giving work and inspiration credits
 */
const Footer = ({ className }) => {
  const inspirations = [
    { name: 'Brittany Chiang', url: 'https://brittanychiang.com/' },
    { name: 'Andrew Couldwell', url: 'https://roomfive.net/' },
  ];

  const credits = [
    {
      header: 'Designed, developed by',
      names: [{ name: 'Gino V Jacob', url: '/' }],
    },
    { header: 'Inspired by', names: inspirations },
  ];

  return (
    <div className={cn(css.footer, className)}>
      {credits.map(({ header, names }) => (
        <Column header={header} names={names} key={header} />
      ))}
    </div>
  );
};

const Column = ({ className, header, names }) => {
  return (
    <div className={css.column}>
      <div className={css.header}>{header}</div>

      {names.map(({ name, url }) => (
        <a className={css.name} href={url} target={'_blank'} key={name}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
