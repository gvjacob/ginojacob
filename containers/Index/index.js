import Head from 'next/head';

import Headline from '../../components/Headline';
import About from '../../components/About';
import Updates from '../../components/Updates';
import Experiences from '../../components/Experiences';
import GetInTouch from '../../components/GetInTouch';

import css from './styles.css';

/**
 * Base page ('/'), showcasing Gino.
 */
const Index = ({ className }) => {
  const stack = [Headline, About, Updates, Experiences, GetInTouch];

  return (
    <div className={className}>
      <Head>
        <title>Gino V Jacob</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Index;
