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

  const columnWidth = 100 / Math.max(2, Math.min(3, assets.length));

  return isEmpty(assets) ? null : (
    <div className={className}>
      <StackGrid columnWidth={`${columnWidth}%`} monitorImagesLoaded>
        {assets.map(({ asset }) => (
          <img className={css.asset} src={asset.sourceUrl} />
        ))}
      </StackGrid>
    </div>
  );
};

export default withQuery(BallroomPictures, BALLROOM_ASSETS_QUERY);
