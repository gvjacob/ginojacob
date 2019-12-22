import React from 'react';
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

  const [current, updates] = partition(items, ({ date }) => date === null);

  return (
    <div
      className={cn('jumpto', css.updates, className)}
      data-testid={'Updates'}
      id={'Updates'}
    >
      <table className={css.table}>
        <tbody>
          <SpotifyActivity />

          {current.map((update) => (
            <UpdateRow key={update.story} {...update} />
          ))}

          {updates.map((update) => (
            <UpdateRow key={update.story} {...update} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withQuery(Updates, UPDATES_QUERY);
