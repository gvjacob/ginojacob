import React from 'react';
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

  return (
    <div className={cn(css.experiences, className)} data-testid={'Experiences'}>
      {experiences.map(({ asset, ...rest }) => (
        <Experience {...rest} asset={asset.sourceUrl} key={rest.company} />
      ))}
    </div>
  );
};

export default withQuery(Experiences, EXPERIENCES_QUERY);
