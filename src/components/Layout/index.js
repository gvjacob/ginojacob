/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Navigation from '../Navigation'
import Static from '../Static'
import styles from './styles.module.scss'
import '../../styles/index.scss'

const Layout = ({ children }) => {
  const {
    takeshape: {
      getLinkList: { items: links },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      takeshape {
        getLinkList {
          items {
            name
            url
            fontAwesomeClass
          }
        }
      }
    }
  `)

  const tabs = [
    { name: 'About', slug: '/' },
    { name: 'Work', slug: '/work' },
    { name: 'Services', slug: '/services' },
    { name: 'Contact', slug: '/contact' },
  ]

  return (
    <div className={styles.layout}>
      <Helmet>
        <script src="https://kit.fontawesome.com/f9c2d11971.js" crossOrigin="anonymous" />
      </Helmet>
      <Navigation className={styles.navigation} tabs={tabs} links={links} />
      <main>
        <Static />
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
