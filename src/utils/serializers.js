export const getUpdates = ({ edges }) =>
  edges.map(({ node }) => ({
    date: node.name,
    html: node.childMarkdownRemark.html,
  }));

export const getProjects = ({ edges }) =>
  edges.map(({ node }) => node.frontmatter);

export const getFooter = ({ frontmatter }) => frontmatter;
