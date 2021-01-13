import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ImagePreloader from 'image-preloader';

import SEO from '@components/SEO';
import Header from '@components/Header';
import LifeUpdates from '@components/LifeUpdates';
import Footer from '@components/Footer';

import { getUpdates, getFrontmatter } from '@utils/serializers';

import 'normalize.css';
import '@styles/index.scss';

import styled from './styled';

const Layout = ({ children }) => {
  const [preloaded, setPreloaded] = useState(false);

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      updates: allFile(
        filter: { sourceInstanceName: { eq: "updates" } }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              html
            }
          }
        }
      }

      assets: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
          }
        }
      }

      footer: markdownRemark(fields: { sourceName: { eq: "footer" } }) {
        frontmatter {
          links {
            label
            to
          }
          resources {
            label
            to
          }
          copyright
          location
        }
      }
    }
  `);

  /**
   * On mount, preload all illustrations in the experience
   * before mounting the carousel
   */
  useEffect(() => {
    const preloadImages = data.assets.edges.map(
      ({ node }) => `/assets${node.relativePath}`,
    );
    const preloader = new ImagePreloader();
    preloader.preload(preloadImages).then(() => setPreloaded(true));
  }, []);

  const updates = getUpdates(data.updates);
  const footer = getFrontmatter(data.footer);

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
      <Header
        status={{
          emoji: '👀',
          text: 'for full time opportunities in 2021',
          to: 'mailto:gvjacob@outlook.com',
        }}
        links={links}
      />
      <styled.Container preloaded={preloaded}>
        <styled.Main>{children}</styled.Main>
        <LifeUpdates updates={updates} />
        <Footer {...footer} />
      </styled.Container>
    </>
  );
};

export default Layout;
