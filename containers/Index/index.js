import Head from 'next/head';

import About from '../../components/Headline';
import Updates from '../../components/Updates';
import Experiences from '../../components/Experiences';
import GetInTouch from '../../components/GetInTouch';

import css from './styles.css';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = ({ className }) => {
  const stack = [Updates, Experiences, GetInTouch];

  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob</title>
      </Head>

      <About />

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Index;
