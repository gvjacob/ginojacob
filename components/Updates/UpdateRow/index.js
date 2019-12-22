import React from 'react';
import moment from 'moment';

import css from './styles.css';

/**
 * Update row containing story and date
 * formatted in MMM DD, YYYY.
 *
 * Use inside a <table>
 */
const UpdateRow = ({ className, story, date }) => {
  const formattedDate = date ? moment(date).format('MMM DD, YYYY') : 'Now';

  return story ? (
    <tr className={className} data-testid={'UpdateRow'}>
      <td className={css.story}>{story}</td>
      <td className={css.date}>{formattedDate}</td>
    </tr>
  ) : null;
};

export default UpdateRow;
