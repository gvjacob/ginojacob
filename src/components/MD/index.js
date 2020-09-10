import React from 'react';
import Markdown from 'react-markdown';

import Link from '../Link';

const MD = ({ source, ...props }) => {
  const renderers = {
    link: ({ href, children }) => <Link href={href}>{children}</Link>,
  };

  return <Markdown source={source} renderers={renderers} {...props} />;
};

export default MD;
