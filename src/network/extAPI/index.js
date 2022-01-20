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

/*
 * This is the authLink that will add the token to the headers of the request.
 * It will be used in the setContext method of the ApolloClient.
 *@param {Object} headers - the headers of the request
 *@returns {Object} headers - the headers of the request with the token
 */
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${env.GH_GRAPH_QL_TOKEN}`,
    },
  };
});

/**
 * @description Creates an ApolloClient instance
 * @requires ApolloClient
 * @requires InMemoryCache
 */
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/**
 * @description Gets Topic data from the Github GraphQl API by name
 * @param {string} topicName - the name of the topic to get data for, default = "react"
 * @returns {Object} the data for the topic requested
 */
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
