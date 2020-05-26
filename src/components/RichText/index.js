import React, { Fragment } from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './styles.module.scss';

const Paragraph = (_, children) => (
  <Fragment>
    <p className={styles.paragraph}>{children}</p>
    <br />
  </Fragment>
);

const RichText = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: Paragraph,
    },
  };

  return <Fragment>{documentToReactComponents(content.json, options)}</Fragment>;
};

export default RichText;
