import { gql } from 'apollo-boost';

export const EXPERIENCES_QUERY = gql`
  {
    getExperienceList(sort: [{ field: "_createdAt", order: "asc" }]) {
      items {
        company
        position
        asset {
          sourceUrl
        }
        url
      }
    }
  }
`;

export const RESOURCES_QUERY = gql`
  {
    getResourceList(sort: [{ field: "_createdAt", order: "asc" }]) {
      items {
        fontAwesomeClass
        url
      }
    }
  }
`;
