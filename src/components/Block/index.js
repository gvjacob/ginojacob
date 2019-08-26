import React from 'react';
import cn from 'classnames';

import Tags from '../Tags';
import linkIcon from '../../assets/images/link.svg';
import styles from './styles.css';

const Block = ({
  className,
  title,
  subtitle,
  description,
  link,
  tags = [],
}) => {
  return (
    <div className={className}>
      <h1 className={cn(styles.title, { [styles.hovered]: link })}>
        <a className={styles.link} href={link} target={'_blank'}>
          {title}
          {link && (
            <img className={styles.linkIcon} src={linkIcon} title={'view me'} />
          )}
        </a>
      </h1>

      <span className={styles.subtitle}>{subtitle}</span>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Tags tags={tags} />
    </div>
  );
};

export default Block;
