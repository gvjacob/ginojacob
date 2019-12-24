import React from 'react';
import cn from 'classnames';

import css from './styles.css';

/**
 * Card with title, subtitle, asset, and link
 */
const Card = ({ className, title, subtitle, url, asset }) => {
  return (
    <div className={cn(css.card, className)} data-testid={'Card'}>
      {asset && (
        <div className={css.cover}>
          <img className={css.asset} src={asset} alt={title} />
          <div className={css.paint} />
        </div>
      )}

      <div className={css.copy}>
        <div className={css.subtitle}>{subtitle}</div>
        <h3 className={css.title}>{title}</h3>

        {url && (
          <a className={css.url} href={url} target={'_blank'}>
            <i className="fas fa-external-link-alt" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
