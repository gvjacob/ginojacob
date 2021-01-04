import React from 'react';
import cn from 'classnames';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ className, to, children }) => {
  if (!to) {
    return children;
  }

  const cssClass = cn('link', className);

  // Check if url is an external link
  if (to.startsWith('http') || to.startsWith('www')) {
    return (
      <a
        className={cssClass}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink className={cssClass} to={to}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
