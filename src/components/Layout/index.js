import React, { Fragment } from 'react';

import Navigation from '../Navigation';

import css from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main className={css.layoutMain}>{children}</main>
    </Fragment>
  );
};

export default Layout;
