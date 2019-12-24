import Head from 'next/head';

/**
 * Designer page ('/designer')
 */
const Designer = ({ className }) => {
  const stack = [];

  return (
    <div className={className}>
      <Head>
        <title>Gino V Jacob | Designer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Designer;
