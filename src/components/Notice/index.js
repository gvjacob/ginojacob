import React from 'react';

import MD from '../MD';
import css from './styles.module.scss';

const Notice = ({ content }) => {
  return <MD className={css.notice} source={content} />;
};

export default Notice;
