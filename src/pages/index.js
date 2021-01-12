import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Link from '@components/Link';

import Layout from '@components/Layout';
import Hero from '@components/Hero';
import Biography from '@components/Biography';
import FeaturedWork from '@components/FeaturedWork';
import ArchiveTease from '@components/ArchiveTease';
import withFadeIn from '@hocs/withFadeIn';

import { getProjects } from '@utils/serializers';

const StyledHero = styled(Hero)`
  margin-top: 20vh;
`;

const StyledBiography = styled(Biography)`
  margin: 200px 0;
`;

const StyledArchiveTease = styled(ArchiveTease)`
  margin: 100px 0;
`;

const IndexPage = ({ className, data }) => {
  const featuredProjects = getProjects(data.featured);

  return (
    <Layout>
      <div className={className}>
        <StyledHero
          name="Gino Jacob"
          photo="/assets/profile.jpg"
          date="02.16.2020"
          position={
            <>
              Currently leading a project at{' '}
              <Link to="https://scout.camd.northeastern.edu/">Scout</Link>
            </>
          }
        />
        <StyledBiography
          about="Lucky to have built a life-saving app, democratized technology skills, and developed some really pretty websites. I'm an engineer, and above all else, an unapologetically user-centric designer."
          status="Currently in Boston. Learning (or really relearning) Spanish on Duolingo. Still quarantining 😷"
        />
        <FeaturedWork featured={featuredProjects} />
        <StyledArchiveTease
          categories={[
            { name: 'Web Design' },
            { name: 'Front-end' },
            { name: 'Backend' },
            { name: 'Creative Direction' },
            { name: 'Branding' },
            { name: 'Logo' },
            { name: 'Open Source' },
            { name: 'Ballroom 💃' },
          ]}
        />
      </div>
    </Layout>
  );
};

export default withFadeIn(IndexPage);

export const query = graphql`
  query FeaturedWorkQuery {
    featured: allMarkdownRemark(
      filter: {
        fields: { sourceName: { eq: "projects" } }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            tease
            description
            cover
            categories
            featured
            live_link
            case_study_link
          }
        }
      }
    }
  }
`;
