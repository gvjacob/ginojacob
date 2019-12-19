import { gql } from 'apollo-boost';

export const UPDATES_QUERY = gql`
  {
    getUpdateList(sort: [{ field: "date", order: "desc" }]) {
      items {
        story
        date
      }
    }
  }
`;

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
