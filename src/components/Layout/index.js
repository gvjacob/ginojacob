import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '@components/SEO';
import Announcement from '@components/Announcement';
import Header from '@components/Header';
import LifeUpdates from '@components/LifeUpdates';
import Footer from '@components/Footer';

import { getUpdates } from '@utils/serializers';

import 'normalize.css';
import '@styles/index.scss';

import styled from './styled';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      updates: allFile(filter: { sourceInstanceName: { eq: "updates" } }) {
        edges {
          node {
            name
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  const updates = getUpdates(data.updates);

  const links = [
    {
      label: 'Bio',
      to: '/',
    },
    {
      label: 'Archive',
      to: '/archive',
    },
  ];

  return (
    <>
      <SEO
        title="Gino — Developer, Designer, Ballroom Dancer"
        description="Lucky to have built a life-saving app, democratized technology skills, and developed some really pretty websites. I'm an engineer, and above all else, an unapologetically user-centric designer."
        image="/assets/gno.svg"
      />
      <Announcement />
      <Header
        status={{
          emoji: '😎',
          text: 'Open to opportunities in 2021',
          to: 'mailto:gvjacob@outlook.com',
        }}
        links={links}
      />
      <styled.Main>{children}</styled.Main>
      <LifeUpdates updates={updates} />
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
        ]}
        location="2nd January 2021. Boston, MA. 37°F cloudy"
        copyright="2020 © Gino Jacob"
      />
    </>
  );
};

export default Layout;
