import React from 'react';
import cn from 'classnames';

import styled from './styled';

const Biography = ({ className }) => {
  return (
    <styled.Biography className={cn(className, 'ff-sans-serif-title')}>
      <styled.About>
        Lucky to have built a life-saving app, democratized technology skills,
        and developed some really pretty websites. I'm an engineer, and above
        all else, an unapologetically user-centric designer.
      </styled.About>
      <styled.Status>
        Currently in Boston. Making cool stuff at Upstatement. Learning (or
        really relearning) Spanish on Duolingo. Still quarantining 😷
      </styled.Status>
      <styled.Location className="ff-mono-body">
        Boston, MA
        <br />
        Thursday 11:44 AM
      </styled.Location>
    </styled.Biography>
  );
};

export default Biography;
