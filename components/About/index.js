import React from 'react';
import Markdown from 'react-markdown';
import cn from 'classnames';

import { ABOUT_QUERY } from '../../queries';
import Updates from '../Updates';
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
    <div className={cn(className)} data-testid={'About'}>
      <div>
        <div className={css.header}>Currently</div>
        <h2 className={css.position}>{position}</h2>
        <h2 className={css.company}>
          <a href={companyUrl} target={'_blank'}>
            {company}
          </a>
        </h2>
      </div>

      <div className={css.header}>About Me</div>
      <Markdown className={css.about} source={about} />

      <div className={cn(css.header, css.events)}>Events</div>
      <Updates />
    </div>
  );
};

export default withQuery(About, ABOUT_QUERY);
