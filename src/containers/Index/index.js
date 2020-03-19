import React, { Fragment } from 'react';

import { SEO, Grid, Profile, Spotify } from '../../components';
import styles from './styles.module.scss';

const Index = () => (
  <div className={styles.index}>
    <SEO title="Developer, Designer, Ballroom Dancer" />
    <Grid height="100%" flow="column dense" columns={5} rows={3}>
      <Profile />
      <Spotify />
    </Grid>
  </div>
);

export default Index;
