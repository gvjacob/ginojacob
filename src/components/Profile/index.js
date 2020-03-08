import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './styles.module.scss'

const Profile = () => {
  const {
    takeshape: { getBiography },
  } = useStaticQuery(graphql`
    query ProfileQuery {
      takeshape {
        getBiography {
          name
          description
          image {
            title
            sourceUrl
          }
        }
      }
    }
  `)

  const { name, description, image } = getBiography

  return (
    <section className={styles.profile}>
      <img className={styles.image} src={image.sourceUrl} alt={image.title} />
      <h1 className={styles.name}>{name}</h1>
      <p>{description}</p>
    </section>
  )
}

export default Profile
