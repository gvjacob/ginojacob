import Head from 'next/head';

import Headline from '../../components/Headline';

import css from './styles.css';

/**
 * Developer page ('/developer')
 */
const Developer = () => {
  const stack = [Headline];

  return (
    <div>
      <Head>
        <title>Gino | Developer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Developer;
