import env from "react-dotenv";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const gh_uri = "https://api.github.com/graphql";

const httpLink = createHttpLink({
  uri: gh_uri,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${env.GH_GRAPH_QL_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getGHRelatedTopicsAndStarGazers = async (name = "react") => {
  try {
    let response = await client.query({
      query: gql`
        {
          topic(name: "${name}") {
            name
            stargazerCount
            relatedTopics {
              name
              stargazerCount
            }
          }
        }
      `,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
