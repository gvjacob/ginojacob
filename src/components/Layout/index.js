import React from 'react';

import styles from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => <main className={styles.layout}>{children}</main>;

export default Layout;
