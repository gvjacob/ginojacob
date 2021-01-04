import React from 'react';
import { If, Then, Else } from 'react-if';

import Link from '@components/Link';
import styled from './styled';

const LinkPill = styled.Pill(Link);
const ButtonPill = styled.Pill('button');

const Pill = ({ className, children, to, onClick }) => {
  return (
    <If condition={to}>
      <Then>
        <LinkPill className={className} to={to} basic>
          {children}
        </LinkPill>
      </Then>
      <Else>
        <If condition={onclick}>
          <ButtonPill className={className} onClick={onClick}>
            {children}
          </ButtonPill>
        </If>
      </Else>
    </If>
  );
};

export default Pill;
