import React from 'react';
import cn from 'classnames';

import css from './styles.css';

/**
 * Card with title, subtitle, asset, and link
 */
const Card = ({ className, title, subtitle, url, icons = [], asset }) => {
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

        <div className={css.bottom}>
          {url && (
            <a className={css.url} href={url} target={'_blank'}>
              Learn more
            </a>
          )}

          <div className={css.icons}>
            {icons.map(({ url, faClass }) => (
              <Icon url={url} faClass={faClass} key={url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className, url, faClass }) => {
  return url ? (
    <a className={css.icon} href={url} target={'_blank'}>
      <i className={faClass} />
    </a>
  ) : null;
};

export const LINK = 'fas fa-external-link-alt';
export const GITHUB = 'fab fa-github';

export default Card;
