export const serializers = {
  updates: ({ edges }) => edges.map(({ node }) => ({
    date: node.name,
    html: node.childMarkdownRemark.html,
  })),
};
