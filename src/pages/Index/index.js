import Head from 'next/head';

import Headline from '../../components/Headline';
import Updates from '../../components/Updates';
import Experiences from '../../components/Experiences';

import css from './styles.css';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = () => {
  const stack = [Headline, Updates, Experiences];

  return (
    <div>
      <Head>
        <title>Gino</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Index;
