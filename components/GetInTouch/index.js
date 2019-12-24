import React from 'react';
import cn from 'classnames';

import css from './styles.css';

const GetInTouch = ({ className }) => {
  return (
    <div className={cn(className)} data-testid={'GetInTouch'}>
      <h2 className={css.title}>Get in touch!</h2>
      <p className={css.paragraph}>
        Feel free to{' '}
        <a className={css.cta} href={'mailto:gvjacob@outlook.com'}>
          shoot me an email
        </a>{' '}
        if you want to work with me, learn more about me, or just want to say
        hi.
      </p>
    </div>
  );
};

export default GetInTouch;
