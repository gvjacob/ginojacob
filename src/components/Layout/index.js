import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Footer } from '../../containers';
import styles from './styles.module.scss';
import '../../styles/index.scss';

const Layout = ({ children }) => {
  const { global } = useStaticQuery(graphql`
    {
      global: contentfulGlobal {
        footerHeadline
        contactLinks {
          ...LINK
        }
        portfolioLinks {
          ...LINK
        }
        avatar {
          ...IMAGE
        }
      }
    }
  `);

  return (
    <div className={styles.layout}>
      <main>{children}</main>
      <Footer className={styles.footer} {...global} />
    </div>
  );
};

export default Layout;
