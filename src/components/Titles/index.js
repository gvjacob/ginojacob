import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Titles = ({ className, titles = [] }) => {
  return (
    <div className={className}>
      <h1 className={styles.title}>Gino Jacob</h1>
      {titles.map((title, i) => (
        <h1 className={styles.title} key={i}>
          {title}
        </h1>
      ))}
    </div>
  )
}

Titles.propTypes = {
  className: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Titles
