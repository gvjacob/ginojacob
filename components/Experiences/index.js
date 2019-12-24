import React from 'react';
import StackGrid from 'react-stack-grid';
import cn from 'classnames';

import withQuery from '../../hocs/withQuery';
import { EXPERIENCES_QUERY } from '../../queries';
import Experience from './Experience';

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
        {experiences.map(({ asset, ...rest }) => (
          <Experience {...rest} asset={asset.sourceUrl} key={rest.company} />
        ))}
      </StackGrid>
    </div>
  );
};

export default withQuery(Experiences, EXPERIENCES_QUERY);
