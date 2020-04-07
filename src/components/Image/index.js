import React, { forwardRef } from 'react';
import { safeGet, classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Image = ({ className, image, fit }, ref) => {
  const { title, url } = safeGet(image, 'title', ['file', 'url']);

  return (
    <img
      className={cn(styles.image, fit && styles.fit, className)}
      src={url}
      alt={title}
      ref={ref}
    />
  );
};

export default forwardRef(Image);
