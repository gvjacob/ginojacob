import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../Navigation'
import Titles from '../Titles'
import Note from '../Note'

import styles from './styles.module.scss'

const Static = ({ className }) => {
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

  const titles = ['Developer', 'Designer', 'Ballroom Dancer']

  const note = 'Creating honest digital brands, from vision to reality.'

  return (
    <div className={styles.static}>
      <Navigation className={styles.navigation} tabs={tabs} links={links} />
      <main className={styles.main}>
        <Titles titles={titles} />
        <Note>{note}</Note>
      </main>
    </div>
  )
}

Titles.propTypes = {
  className: PropTypes.string,
}

export default Static
