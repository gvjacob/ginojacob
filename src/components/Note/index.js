import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Note = ({ className, children }) => {
  return <div className={cn(styles.note, className)}>{children}</div>
}

Note.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Note
