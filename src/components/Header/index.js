import React from 'react';
import { If } from 'react-if';
import isEmpty from 'lodash.isempty';

import Link from '@components/Link';

import styled from './styled';

const Header = ({ className, links }) => (
  <styled.Header className={className}>
    <If condition={!isEmpty(links)}>
      <styled.HeaderLinks>
        {links.map(({ label, to }) => (
          <li className="ff-sans-serif-body-sub" key={label}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </styled.HeaderLinks>
    </If>
  </styled.Header>
);

export default Header;
