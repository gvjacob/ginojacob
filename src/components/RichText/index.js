import React, { Fragment } from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Link } from '..';
import styles from './styles.module.scss';

const RichTextLink = ({ data }, text) => <Link to={data.uri}>{text}</Link>;

const Paragraph = (_, children) => (
  <Fragment>
    <p className={styles.paragraph}>{children}</p>
    <br />
  </Fragment>
);

const RichText = ({ content }) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: RichTextLink,
      [BLOCKS.PARAGRAPH]: Paragraph,
    },
  };

  return <Fragment>{documentToReactComponents(content.json, options)}</Fragment>;
};

export default RichText;
