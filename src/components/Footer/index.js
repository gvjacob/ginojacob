import React from 'react';

import css from './styles.module.scss';

const Footer = ({ email, copyright }) => {
  return (
    <footer>
      <span>{email}</span>
      <div className={css.copyright}>
        <span>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
