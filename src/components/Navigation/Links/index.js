import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import VerticalRule from '../../VerticalRule'

import styles from './styles.module.scss'

const Links = ({ className, links }) => {
  return (
    <VerticalRule>
      <div className={styles.links}>
        {links.map(({ name, fontAwesomeClass, url }, i) => (
          <a className={styles.link} href={url} target={'_blank'} rel="noopener noreferrer" key={i}>
            <i className={cn(fontAwesomeClass, styles.icon)} />
            <span className={styles.name}>{name}</span>
          </a>
        ))}
      </div>
    </VerticalRule>
  )
}

Links.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fontAwesomeClass: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Links
