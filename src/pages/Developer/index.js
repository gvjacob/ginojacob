import Head from 'next/head';

import Updates from '../../components/Updates';

import css from './styles.css';

/**
 * Developer page ('/developer')
 */
const Developer = ({ className }) => {
  const stack = [Updates];

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
