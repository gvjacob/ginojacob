import React from 'react';
import { Column } from '../Templates';
import styles from './styles.module.scss';

const Profile = () => (
  <Column className={styles.profile}>
    <h1 className={styles.headline}>Gino Jacob</h1>
  </Column>
);

export default Profile;
