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
    liveSite
    github
    caseStudy
    links {
      ...LINK
    }
    media {
      ...IMAGE
    }
  }

  fragment LINK on ContentfulLink {
    name
    url
  }
`;
