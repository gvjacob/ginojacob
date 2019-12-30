import React from 'react';
import { join } from 'lodash';
import Markdown from 'react-markdown';
import cn from 'classnames';

import { BALLROOM_STORY_QUERY } from '../../queries';
import withQuery from '../../hocs/withQuery';
import css from './styles.css';

/**
 * Ballroom story.
 */
const BallroomStory = ({ className, data }) => {
  const {
    getBallroom: { level, story, styles, assets },
  } = data;

  const stylesDanced = `in ${join(
    styles.map(({ name }) => name),
    ' & ',
  )} styles`;

  return (
    <div
      className={cn(css.ballroomStory, className)}
      id={'Story'}
      data-testid={'BallroomStory'}
    >
      <div>
        <div className={css.header}>Competing As</div>
        <h2 className={css.level}>{`${level} Level Dancer`}</h2>
        <h2>{stylesDanced}</h2>
      </div>

      <div className={css.copy}>
        <div className={css.header}>My Story</div>
        <Markdown className={css.story} source={story} />
      </div>
      <img className={css.asset} src={assets[0].asset.sourceUrl} />
    </div>
  );
};

export default withQuery(BallroomStory, BALLROOM_STORY_QUERY);
