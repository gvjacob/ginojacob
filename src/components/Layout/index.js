import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
