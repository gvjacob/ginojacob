import React from 'react';

import '@styles/index.scss';
import 'normalize.css';

import styled from './styled';

const Layout = ({ children }) => (
  <>
    <header />
    <styled.Main>{children}</styled.Main>
    <footer />
  </>
);

export default Layout;
