import React from 'react';

const Link = ({ children, to, newTab = false, ...props }) => {
  if (newTab) {
    props = { ...props, target: '_blank', rel: 'noopener noreferrer' };
  }

  return to ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    children
  );
};

export default Link;
