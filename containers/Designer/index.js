import Head from 'next/head';

import DesignerProjects from '../../components/DesignerProjects';

import css from './styles.css';

/**
 * Designer page ('/designer')
 */
const Designer = ({ className }) => {
  const stack = [DesignerProjects];

  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob | Designer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Designer;
