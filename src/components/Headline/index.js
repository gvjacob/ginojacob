import React from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import css from './styles.css';

/**
 * Full page headline for any of the pages.
 */
const Headline = ({ className }) => {
  const { asPath } = useRouter();

  const titles = [
    { title: 'Gino Jacob', href: '/' },
    { title: 'Developer', href: '/developer' },
    { title: 'Designer', href: '/designer' },
    { title: 'Ballroom Dancer', href: '/ballroomdancer' },
  ];

  const isSelected = (href) => {
    return href === asPath;
  };

  return (
    <div className={cn(css.headline, className)}>
      {titles.map(({ title, href }) => {
        return isSelected(href) ? (
          <h1 key={title}>{title}</h1>
        ) : (
          <div key={title}>{title}</div>
        );
      })}
    </div>
  );
};

export default Headline;
