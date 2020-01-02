import Head from 'next/head';

import BallroomStory from '../../components/BallroomStory';

import css from './styles.css';

/**
 * Ballroom Dancer page ('/ballroomdancer')
 */
const BallroomDancer = ({ className }) => {
  return (
    <div className={className}>
      <Head>
        <title>Gino Jacob | Ballroom Dancer</title>
      </Head>

      <BallroomStory />
    </div>
  );
};

export default BallroomDancer;
