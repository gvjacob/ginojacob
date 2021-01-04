import React from 'react';

import Header from '@components/Header';

import '@styles/index.scss';
import 'normalize.css';

import styled from './styled';

const Layout = ({ children }) => {
  const links = [
    {
      label: 'Bio',
      to: '#',
    },
    {
      label: 'Work',
      to: '#',
    },
    {
      label: 'Case Studies',
      to: '#',
    },
  ];

  return (
    <>
      <Header links={links} />
      <styled.Main>{children}</styled.Main>
      <footer />
    </>
  );
};

export default Layout;
