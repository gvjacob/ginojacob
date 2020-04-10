import { graphql } from 'gatsby';

export const imageFragment = graphql`
  fragment IMAGE on ContentfulAsset {
    title
    file {
      url
    }
  }

  fragment PROJECT on ContentfulProject {
    name
    description
    link
    github
    media {
      ...IMAGE
    }
  }
`;
