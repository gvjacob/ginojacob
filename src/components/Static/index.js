import React from 'react'
import PropTypes from 'prop-types'

import Titles from '../Titles'
import Note from '../Note'

import styles from './styles.module.scss'

const Static = ({ className }) => {
  const titles = ['Developer', 'Designer', 'Ballroom Dancer']

  const note = 'Creating honest digital brands, from vision to reality.'

  return (
    <div className={styles.main}>
      <Titles titles={titles} />
      <Note>{note}</Note>
    </div>
  )
}

Titles.propTypes = {
  className: PropTypes.string,
}

export default Static
