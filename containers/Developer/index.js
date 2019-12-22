import Head from 'next/head';

import css from './styles.css';

/**
 * Developer page ('/developer')
 */
const Developer = ({ className }) => {
  const stack = [];

  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob | Developer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Developer;