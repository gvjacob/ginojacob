import React, { useState } from 'react';
import { partition } from 'lodash';
import cn from 'classnames';

import withQuery from '../../hocs/withQuery';
import { UPDATES_QUERY } from '../../queries';
import UpdateRow from './UpdateRow';
import SpotifyActivity from './SpotifyActivity';
import css from './styles.css';

/**
 * Life updates including milestones reached,
 * current endeavors, and latest Spotify activity.
 */
const Updates = ({ className, data }) => {
  const {
    getUpdateList: { items },
  } = data;

  const [expanded, setExpanded] = useState(false);

  const [bookmarked, updates] = partition(
    items,
    ({ bookmark }) => bookmark === true,
  );
  const truncatedUpdates = updates.slice(0, 3);

  return (
    <div className={cn(css.updates, className)} data-testid={'Updates'}>
      <div className={cn(css.header, css.events)}>Events</div>
      <table className={css.table}>
        <tbody>
          {bookmarked.map((update) => (
            <UpdateRow key={update.story} {...update} />
          ))}

          {(expanded ? updates : truncatedUpdates).map((update) => (
            <UpdateRow key={update.story} {...update} />
          ))}
        </tbody>
      </table>
      <Dots onClick={() => setExpanded(!expanded)} />
    </div>
  );
};

const Dots = ({ className, onClick }) => {
  return (
    <button
      type={'button'}
      className={cn(css.dots, className)}
      onClick={onClick}
      data-testid={'Dots'}
    >
      <i className={'fas fa-ellipsis-h'} />
    </button>
  );
};

export default withQuery(Updates, UPDATES_QUERY);
