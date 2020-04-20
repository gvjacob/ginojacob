import React from 'react';

const Link = ({ children, to, ...props }) =>
  to ? (
    <a href={to} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    children
  );

export default Link;
