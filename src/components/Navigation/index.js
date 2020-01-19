import React from 'react'
import { Link } from 'gatsby'
import { reverse } from 'lodash'
import PropTypes from 'prop-types'

import Links from './Links'
import { cn } from '../../utils'
import styles from './styles.module.scss'

const Navigation = ({ className, tabs, links }) => {
  const reversed = tabs.slice().reverse()

  return (
    <nav className={cn(className, styles.navigation)}>
      <div className={styles.tabs}>
        {reversed.map(({ name, slug }) => (
          <Link className={styles.tab} to={slug}>
            {name}
          </Link>
        ))}
      </div>
      <Links links={links} />
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
  tabs: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default Navigation
