import React from 'react';
import { join } from 'lodash';
import Markdown from 'react-markdown';
import cn from 'classnames';

import { ABOUT_QUERY } from '../../queries';
import withQuery from '../../hocs/withQuery';

import css from './styles.css';

/**
 * Headline.
 */
const Headline = ({ className, data }) => {
  const {
    getBiography: {
      about,
      profile: { sourceUrl },
    },
    getExperienceList: { items },
  } = data;

  const { position, company, companyUrl } = items[0];

  return (
    <div
      className={cn(css.ballroomStory, className)}
      id={'Story'}
      data-testid={'BallroomStory'}
    >
      <div className={css.top}>
        <div className={css.header}>Currently</div>
        <h2 className={css.level}>{position}</h2>
        <h2>
          @{' '}
          <a className={css.company} href={companyUrl} target={'_blank'}>
            {company}
          </a>
        </h2>
      </div>

      <div className={css.copy}>
        <div className={css.header}>About Me</div>
        <Markdown className={css.story} source={about} />
      </div>

      <div className={css.assetContainer}>
        <h1 className={css.name}>GINO V JACOB</h1>
        <img className={css.asset} src={sourceUrl} />
      </div>
    </div>
  );
};

export default withQuery(Headline, ABOUT_QUERY);
