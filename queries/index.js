import { gql } from 'apollo-boost';

export const UPDATES_QUERY = gql`
  {
    getUpdateList(sort: [{ field: "date", order: "desc" }]) {
      items {
        story
        date
        bookmark
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

export const ABOUT_QUERY = gql`
  {
    getBiography {
      about
      profile {
        sourceUrl
      }
    }
    getExperienceList(filter: { match: { current: true } }) {
      items {
        position
        company
        companyUrl
      }
    }
  }
`;

export const GINO_PNG_QUERY = gql`
  {
    getAsset(_id: "70ea2750-5089-4608-b450-ff1a77bca47f") {
      sourceUrl
    }
  }
`;

export const DEVELOPER_PROJECTS_QUERY = gql`
  {
    getProjectList(
      filter: { match: { type: "developer" } }
      sort: { field: "_createdAt", order: "asc" }
    ) {
      items {
        title
        subtitle
        url
        repositoryUrl
        assets {
          asset {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const DESIGNER_PROJECTS_QUERY = gql`
  {
    getProjectList(
      filter: { match: { type: "designer" } }
      sort: { field: "_createdAt", order: "asc" }
    ) {
      items {
        title
        subtitle
        url
        repositoryUrl
        assets {
          asset {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const BALLROOM_STORY_QUERY = gql`
  {
    getBallroom {
      level
      story
      styles {
        name
      }
      assets {
        asset {
          sourceUrl
        }
      }
    }
  }
`;
