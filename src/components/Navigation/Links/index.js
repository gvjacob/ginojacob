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
          <a href={url} target={'_blank'} key={i}>
            <i className={cn(fontAwesomeClass, styles.link)} />
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
