import { graphql } from 'gatsby';

export const imageFragment = graphql`
  fragment IMAGE on ContentfulAsset {
    title
    file {
      url
    }
  }
`;
