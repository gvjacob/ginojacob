import Head from 'next/head';

import Updates from '../components/Updates';
import Experiences from '../components/Experiences';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = () => (
  <div>
    <Head>
      <title>Gino</title>
    </Head>

    <Updates />
    <Experiences />
  </div>
);

export default Index;
