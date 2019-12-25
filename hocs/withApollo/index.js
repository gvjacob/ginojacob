import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const { TAKESHAPE_API_GRAPHQL, TAKESHAPE_API_KEY } = process.env;

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: process.env.TAKESHAPE_API_GRAPHQL,

      cache: new InMemoryCache({
        addTypename: false,
      }).restore(initialState || {}),

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
      },
    }),
);
