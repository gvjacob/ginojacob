/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Navigation from '../Navigation'
import styles from './styles.module.scss'
import '../../styles/index.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
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

  const links = [
    {
      name: 'Github',
      fontAwesomeClass: 'fab fa-github',
      url: 'https://github.com/gvjacob',
    },
    {
      name: 'LinkedIn',
      fontAwesomeClass: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/gvjacob',
    },
    {
      name: 'Résumé',
      fontAwesomeClass: 'fas fa-file-pdf',
      url: 'https://indd.adobe.com/view/3d1c1fa1-6a12-4d15-b3d9-c0059cc1202b',
    },
  ]

  return (
    <div className={styles.layout}>
      <Helmet>
        <script src="https://kit.fontawesome.com/f9c2d11971.js" crossOrigin="anonymous" />
      </Helmet>
      <Navigation className={styles.navigation} tabs={tabs} links={links} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
