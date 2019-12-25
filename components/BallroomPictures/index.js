import React from 'react';
import { isEmpty } from 'lodash';
import StackGrid from 'react-stack-grid';
import cn from 'classnames';

import withQuery from '../../hocs/withQuery';
import { BALLROOM_ASSETS_QUERY } from '../../queries';
import css from './styles.css';

const BallroomPictures = ({ className, data }) => {
  const {
    getBallroom: { assets },
  } = data;

  return isEmpty(assets) ? null : (
    <div className={className}>
      <StackGrid columnWidth={'33%'}>
        {assets.map(({ asset }) => (
          <img className={css.asset} src={asset.sourceUrl} />
        ))}
      </StackGrid>
    </div>
  );
};

export default withQuery(BallroomPictures, BALLROOM_ASSETS_QUERY);
