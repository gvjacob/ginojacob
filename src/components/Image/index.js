import React, { forwardRef } from 'react';
import { isEmpty } from 'lodash';
import { safeGet, classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Image = ({ className, image, fit, ...props }, ref) => {
  const { title, url } = safeGet(image, 'title', ['file', 'url']);

  if (isEmpty(url)) {
    return null;
  }

  return (
    <img
      className={cn(styles.image, fit && styles.fit, className)}
      src={url}
      alt={title}
      {...props}
      ref={ref}
    />
  );
};

export default forwardRef(Image);
