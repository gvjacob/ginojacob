import React from 'react';
import cn from 'classnames';

import css from './styles.css';

/**
 * Experience card showcasing company name,
 * and job title.
 */
const Experience = ({ className, company, position, url, asset }) => {
  return (
    <div className={cn(css.experience, className)} data-testid={'Experience'}>
      <div className={css.cover}>
        <img className={css.asset} src={asset} alt={company} />
        <div className={css.paint} />
      </div>

      <div className={css.card}>
        <div className={css.position}>{position}</div>
        <h3 className={css.company}>{company}</h3>

        {url && (
          <a className={css.url} href={url} target={'_blank'}>
            <i className="fas fa-external-link-alt" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Experience;
