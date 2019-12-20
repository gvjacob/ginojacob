import React, { useState, useEffect } from 'react';
import { isEmpty, compact } from 'lodash';
import cn from 'classnames';

import css from './styles.css';

/**
 * Find and present all jump to components
 * in the document.
 */
const JumpTo = ({ className }) => {
  const [jumpToElements, setJumpToElements] = useState([]);

  const getJumpToIds = () => {
    const elementsByClass = document.getElementsByClassName('jumpto');
    const array = Array.from(elementsByClass);

    return compact(array.map(({ id }) => id));
  };

  useEffect(() => {
    setTimeout(() => {
      setJumpToElements(getJumpToIds());
    }, 1000);
  }, []);

  return isEmpty(jumpToElements) ? null : (
    <div className={className} data-testid={'JumpTo'}>
      <a className={cn(css.link, css.backToTop)} href={'#'}>
        Back to Top
      </a>

      {jumpToElements.map((id) => (
        <a className={css.link} href={`#${id}`} key={id}>
          {id}
        </a>
      ))}
    </div>
  );
};

export default JumpTo;
