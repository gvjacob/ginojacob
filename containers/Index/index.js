import Head from 'next/head';

import Updates from '../../components/Updates';
import Experiences from '../../components/Experiences';

import css from './styles.css';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = ({ className }) => {
  const stack = [Updates, Experiences];

  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Index;