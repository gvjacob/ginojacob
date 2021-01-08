export const getUpdates = ({ edges }) => edges.map(({ node }) => ({
  date: node.name,
  html: node.childMarkdownRemark.html,
}));
