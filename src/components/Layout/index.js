import React, { Fragment } from 'react';

import Navigation from '../Navigation';

import '../../styles/index.scss';
import './styles.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main className="layout__main">{children}</main>
    </Fragment>
  );
};

export default Layout;
