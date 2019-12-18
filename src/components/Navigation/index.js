import React from 'react';
import { isEmpty } from 'lodash';
import cn from 'classnames';
import Link from 'next/link';

import css from './styles.css';

const Navigation = ({ className, tabs }) => {
  if (isEmpty(tabs)) return null;

  const first = tabs[0];
  const rest = tabs.slice(1);

  return (
    <div className={cn(css.navigation, className)} data-testid={'Navigation'}>
      <NavigationLink text={first.text} href={first.href} />

      <div className={'rest'}>
        {rest.map(({ text, href }) => (
          <NavigationLink
            className={css.navigationLink}
            text={text}
            href={href}
            key={text}
          />
        ))}
      </div>
    </div>
  );
};

const NavigationLink = ({ className, text, href }) => {
  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default Navigation;
