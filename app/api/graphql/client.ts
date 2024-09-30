import { ApolloClient, InMemoryCache } from '@apollo/client';
import { EndPoint } from '../../constants';

const client = new ApolloClient({
  uri: EndPoint.gqlUrl,
  cache: new InMemoryCache(),
});

export default client;
