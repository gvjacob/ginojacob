import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri:
        'https://api.takeshape.io/project/4bb9e2e0-a18f-4c1a-99f3-3eab414085d7/graphql',

      cache: new InMemoryCache({
        addTypename: false,
      }).restore(initialState || {}),

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer dd4a14e9c44e4f5a9749f3fe2d6bb1ca`,
      },
    }),
);
