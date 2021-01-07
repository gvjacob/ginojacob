import { graphql } from 'gatsby';

export const query = graphql`
  query ArchiveQuery {
    projects: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "projects" } } }
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
          }
        }
      }
    }
  }
`;

export { default } from './_ArchivePage';
