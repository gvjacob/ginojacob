import React from 'react';
import { If, Then, Else } from 'react-if';

import Link from '@components/Link';
import styled from './styled';

const LinkPill = styled.Pill(Link);
const ButtonPill = styled.Pill('button');
const PlainPill = styled.Pill('span');

const Pill = ({ className, children, to, onClick }) => (
  <If condition={to}>
    <Then>
      <LinkPill className={className} to={to} basic isFocusable>
        {children}
      </LinkPill>
    </Then>
    <Else>
      <If condition={onClick}>
        <Then>
          <ButtonPill className={className} onClick={onClick} isFocusable>
            {children}
          </ButtonPill>
        </Then>
        <Else>
          <PlainPill className={className}>{children}</PlainPill>
        </Else>
      </If>
    </Else>
  </If>
);

export default Pill;
