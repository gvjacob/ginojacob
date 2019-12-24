import React from 'react';
import StackGrid from 'react-stack-grid';
import cn from 'classnames';

import withQuery from '../../hocs/withQuery';
import { EXPERIENCES_QUERY } from '../../queries';
import Card from '../Card';

import css from './styles.css';

/**
 * Row of <Experience />.
 */
const Experiences = ({ className, data }) => {
  const {
    getExperienceList: { items: experiences },
  } = data;

  const columnWidth = `${100 / 3}%`;

  return (
    <div
      className={cn('jumpto', css.experiences, className)}
      data-testid={'Experiences'}
      id={'Experiences'}
    >
      <StackGrid columnWidth={'33%'} enableSSR>
        {experiences.map(({ company, position, url, asset }) => (
          <Card
            title={company}
            subtitle={position}
            url={url}
            asset={asset.sourceUrl}
          />
        ))}
      </StackGrid>
    </div>
  );
};

export default withQuery(Experiences, EXPERIENCES_QUERY);
