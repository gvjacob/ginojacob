import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => <main className={styles.layout}>{children}</main>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
