import React from 'react';
import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
import cn from 'classnames';
import Link from 'next/link';

import css from './styles.css';

/**
 * Navigation bar. The first tab is placed on the left,
 * and the others on the right.
 */
const Navigation = ({ className }) => {
  const { asPath } = useRouter();

  const tabs = [
    { text: 'Gino', href: '/' },
    { text: 'Developer', href: '/developer' },
    { text: 'Designer', href: '/designer' },
    { text: 'Ballroom Dancer', href: '/ballroomdancer' },
  ];

  const isSelected = (href) => {
    return asPath === href;
  };

  return (
    <div className={cn(css.navigation, className)} data-testid={'Navigation'}>
      {tabs.map(({ text, href }, index) => (
        <NavigationLink
          className={css.rightLink}
          text={text}
          href={href}
          selected={isSelected(href)}
          key={text}
        />
      ))}
    </div>
  );
};

const NavigationLink = ({ className, text, href, selected }) => {
  return (
    <Link href={href}>
      <a className={cn(css.link, { [css.selected]: selected }, className)}>
        {text}
      </a>
    </Link>
  );
};

export default Navigation;
