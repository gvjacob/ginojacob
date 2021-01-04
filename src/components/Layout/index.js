import React from 'react';

import SEO from '@components/SEO';
import Announcement from '@components/Announcement';
import Header from '@components/Header';
import LifeUpdates from '@components/LifeUpdates';
import Footer from '@components/Footer';

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
      <SEO
        title="Gino | Developer, Designer, Ballroom Dancer"
        description="Lucky to have built a life-saving app, democratized technology skills, and developed some really pretty websites. I'm an engineer, and above all else, an unapologetically user-centric designer."
        image="/assets/gno.svg"
      />
      <Announcement />
      <Header links={links} />
      <styled.Main>{children}</styled.Main>
      <LifeUpdates
        updates={[
          {
            date: 'Dec 16th, 2020',
            text: 'Finished Fall 2020 semester at Northeastern University',
          },
          {
            date: 'Nov 13th, 2020',
            text: 'Left Upstatement',
          },
          {
            date: 'Dec 16th, 2020',
            text: 'Finished Fall 2020 semester at Northeastern University',
          },
          {
            date: 'Nov 13th, 2020',
            text: 'Left Upstatement',
          },
          {
            date: 'Dec 16th, 2020',
            text: 'Finished Fall 2020 semester at Northeastern University',
          },
          {
            date: 'Nov 13th, 2020',
            text: 'Left Upstatement',
          },
        ]}
      />
      <Footer
        links={[
          {
            label: 'GitHub',
            to: 'https://github.com/gvjacob',
          },
          {
            label: 'LinkedIn',
            to: 'https://www.linkedin.com/in/gvjacob/',
          },
        ]}
        resources={[
          {
            label: 'Résumé',
            to:
              'https://indd.adobe.com/view/4b441bbf-c9c3-47d9-b0d4-e49ab74806cb',
          },
          {
            label: 'gvjacob@outlook.com',
            to: 'mailto:gvjacob@outlook.com',
          },
          {
            label: '(909) 213 - 4090',
          },
        ]}
        location="2nd January 2021. Boston, MA. 37°F cloudy"
        copyright="2020 © Gino Jacob"
      />
    </>
  );
};

export default Layout;
