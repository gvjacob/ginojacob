import React from 'react';

import css from './styles.module.scss';

const Footer = ({ copyright }) => {
  return (
    <footer className={css.footer}>
      <div className={css.copyright}>
        <span>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
