import React from 'react';
import { If, Then, Else } from 'react-if';
import { Link as GatsbyLink } from 'gatsby';
import { isEmpty } from 'lodash';
import { classNames as cn } from 'peculiarity';

import css from './styles.module.scss';

const Link = ({ className, href, children }) => {
  if (isEmpty(href)) {
    return children;
  }

  const internal = /^\/(?!\/)/.test(href);

  const props = {
    className: cn(css.link, className),
  };

  return (
    <If condition={internal}>
      <Then>
        <GatsbyLink to={href} {...props}>
          {children}
        </GatsbyLink>
      </Then>
      <Else>
        <a href={href} {...props} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Else>
    </If>
  );
};

export default Link;
