import Head from 'next/head';

import BallroomStory from '../../components/BallroomStory';
import BallroomPictures from '../../components/BallroomPictures';

import css from './styles.css';

/**
 * Ballroom Dancer page ('/ballroomdancer')
 */
const BallroomDancer = ({ className }) => {
  const stack = [BallroomPictures];

  return (
    <div className={className}>
      <Head>
        <title>Gino V Jacob | Ballroom Dancer</title>
      </Head>

      <BallroomStory className={css.ballroomStory} />

      {stack.map(($component, index) => (
        <$component className={css.section} key={index} />
      ))}
    </div>
  );
};

export default BallroomDancer;
