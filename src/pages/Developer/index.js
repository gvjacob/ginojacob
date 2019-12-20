import Head from 'next/head';

import Headline from '../../components/Headline';

import css from './styles.css';

/**
 * Developer page ('/developer')
 */
const Developer = ({ className }) => {
  const stack = [Headline];

  return (
    <div className={className}>
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
