import React, { Fragment } from 'react';

import Navigation from '../Navigation';

import '../../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
