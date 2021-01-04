import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ className, to, children }) => {
  if (!to) {
    return children;
  }

  // Check if url is an external link
  if (to.startsWith('http') || to.startsWith('www')) {
    return (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
