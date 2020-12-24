  
import { ApolloClient, createHttpLink} from '@apollo/client'
import { cache } from "./graphql/cache";
const httpLink = createHttpLink({
    uri: 'https://api.cyogyms.com/graphql/api',
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
     cache,
  });

  export default client;