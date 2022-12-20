import { ApolloClient, InMemoryCache } from '@apollo/client';
export { ApolloProvider, useQuery, useLazyQuery, gql } from '@apollo/client';
// Initialize Apollo Client
export const apolloClient = new ApolloClient({
  uri: 'https://webservices.jumpingcrab.com/graphql',
  cache: new InMemoryCache(),
});
