import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import VerticalRule from '../../VerticalRule';

import styles from './styles.module.scss';

const Links = ({ className, links }) => {
  return (
    <VerticalRule>
      <div className={styles.links}>
        {links.map(({ name, fontAwesomeClass, url }) => (
          <a href={url} target={'_blank'}>
            <i className={cn(fontAwesomeClass, styles.link)} />
          </a>
        ))}
      </div>
    </VerticalRule>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  tabs: PropTypes.arrayOf({
    faClass: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Links;
