import Head from 'next/head';

import DeveloperProjects from '../../components/DeveloperProjects';
import css from './styles.css';

/**
 * Developer page ('/developer')
 */
const Developer = ({ className }) => {
  const stack = [DeveloperProjects];

  return (
    <div className={className}>
      <Head>
        <title>Gino V Jacob | Developer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default Developer;
