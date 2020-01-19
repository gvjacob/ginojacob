import React from 'react'
import PropTypes from 'prop-types'

import { cn } from '../../utils'
import styles from './styles.module.scss'

const VerticalRule = ({ className, children }) => {
  return (
    <div className={cn(className)}>
      {children}
      <div className={styles.rule} />
    </div>
  )
}

export default VerticalRule
