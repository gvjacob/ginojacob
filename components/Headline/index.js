import React from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import withQuery from '../../hocs/withQuery';
import { GINO_PNG_QUERY } from '../../queries';
import css from './styles.css';

/**
 * Full page headline for any of the pages.
 */
const Headline = ({ className, data }) => {
  const {
    getAsset: { sourceUrl },
  } = data;

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
    <div className={cn(css.headline, className)} data-testid={'Headline'}>
      <div className={css.band}>
        <img className={css.png} src={sourceUrl} />
      </div>

      <div className={css.titles}>
        {titles.map(({ title, href }) => {
          const selected = isSelected(href);

          const titleClass = cn(css.title, {
            [css.selected]: selected,
          });

          return selected ? (
            <h1 className={titleClass} key={title}>
              {title}
            </h1>
          ) : (
            <div className={titleClass} key={title}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withQuery(Headline, GINO_PNG_QUERY);
