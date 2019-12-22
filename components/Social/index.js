import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { RESOURCES_QUERY } from '../../queries';
import withQuery from '../../hocs/withQuery';
import css from './styles.css';

/**
 * Social links (e.g. Github, LinkedIn, etc.)
 */
const Social = ({ className, data }) => {
  const {
    getResourceList: { items: links },
  } = data;

  return (
    <div className={cn(css.social, className)} data-testid={'Social'}>
      {links.map(({ fontAwesomeClass, url }) => (
        <a href={url} target={'_blank'} key={fontAwesomeClass}>
          <i className={cn(fontAwesomeClass, css.icon)} />
        </a>
      ))}
    </div>
  );
};

export default withQuery(Social, RESOURCES_QUERY);
