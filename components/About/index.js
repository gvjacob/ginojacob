import React from 'react';
import Markdown from 'react-markdown';
import cn from 'classnames';

import { ABOUT_QUERY } from '../../queries';
import withQuery from '../../hocs/withQuery';
import css from './styles.css';

/**
 * About page showcasing current position, a quick bio
 * and life events.
 */
const About = ({ className, data }) => {
  const {
    getExperienceList: { items },
    getBiography: { about },
  } = data;

  const { position, company, companyUrl } = items[0];

  return (
    <div className={cn('jumpto', className)} id={'About'} data-testid={'About'}>
      <div>
        <div className={css.header}>Currently</div>
        <h2 className={css.position}>{position}</h2>
        <h2>
          @{' '}
          <a className={css.company} href={companyUrl} target={'_blank'}>
            {company}
          </a>
        </h2>
      </div>

      <div className={css.header}>About Me</div>
      <Markdown className={css.about} source={about} />
    </div>
  );
};

export default withQuery(About, ABOUT_QUERY);
