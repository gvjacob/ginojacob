import React, { Fragment } from 'react';

import { SEO, Grid, Profile } from '../../components';

const Index = () => (
  <Fragment>
    <SEO title="Developer, Designer, Ballroom Dancer" />
    <Grid flow="column dense" columns={5} rows={3}>
      <Profile />
    </Grid>
  </Fragment>
);

export default Index;
