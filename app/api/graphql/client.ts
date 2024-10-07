import { ApolloClient, InMemoryCache } from '@apollo/client';
import { EndPoint } from '../../constants';

const client = new ApolloClient({
  uri: EndPoint.baseUrl,
  cache: new InMemoryCache(),
});

export default client;
