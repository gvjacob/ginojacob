import { gql } from 'apollo-boost';

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
