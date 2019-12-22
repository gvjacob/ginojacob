import Head from 'next/head';

/**
 * Ballroom Dancer page ('/ballroomdancer')
 */
const BallroomDancer = ({ className }) => {
  const stack = [];

  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob | Ballroom Dancer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default BallroomDancer;
