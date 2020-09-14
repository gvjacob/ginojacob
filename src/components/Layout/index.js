import React, { Fragment } from 'react';

import Navigation from '../Navigation';
import Notice from '../Notice';

import css from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Notice content="This website is under construction" />
      <Navigation />
      <main className={css.layoutMain}>{children}</main>
    </Fragment>
  );
};

export default Layout;
