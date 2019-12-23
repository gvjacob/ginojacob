import Head from 'next/head';

import About from '../../components/About';
import Experiences from '../../components/Experiences';
import GetInTouch from '../../components/GetInTouch';

import css from './styles.css';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = ({ className }) => {
  const stack = [About, Experiences, GetInTouch];

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
