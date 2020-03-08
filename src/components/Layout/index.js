import React from 'react'
import { Helmet } from 'react-helmet'
//import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'
import '../../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <script src="https://kit.fontawesome.com/f9c2d11971.js" crossOrigin="anonymous" />
      </Helmet>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
