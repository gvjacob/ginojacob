import React from 'react'
import PropTypes from 'prop-types'

import { cn } from '../../utils'
import styles from './styles.module.scss'

const VerticalRule = ({ className, children }) => {
  return (
    <div className={cn(styles.verticalRule, className)}>
      <div>{children}</div>
      <div className={styles.rule} />
    </div>
  )
}

VerticalRule.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default VerticalRule
