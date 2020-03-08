import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Profile from '../Profile';
import styles from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/f9c2d11971.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Profile />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
