import Head from 'next/head';

import BallroomStory from '../../components/BallroomStory';

import css from './styles.css';

/**
 * Ballroom Dancer page ('/ballroomdancer')
 */
const BallroomDancer = ({ className }) => {
  const stack = [BallroomStory];

  return (
    <div className={className}>
      <Head>
        <title>Gino V Jacob | Ballroom Dancer</title>
      </Head>

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default BallroomDancer;
